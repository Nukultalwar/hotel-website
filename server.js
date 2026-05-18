import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const isProduction = process.env.NODE_ENV === 'production';

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files with proper MIME types
const staticPath = isProduction ? path.join(__dirname, 'dist') : __dirname;
app.use(express.static(staticPath, {
  setHeaders: (res, filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.js': 'application/javascript',
      '.jsx': 'application/javascript',
      '.mjs': 'application/javascript',
      '.ts': 'application/javascript',
      '.tsx': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.html': 'text/html',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
      '.ttf': 'font/ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.ico': 'image/x-icon',
      '.webp': 'image/webp',
    };

    if (mimeTypes[ext]) {
      res.setHeader('Content-Type', mimeTypes[ext]);
    }
  }
}));

// Handle SPA routing - serve index.html for all non-API routes
// This must come AFTER all API routes and static files
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Create email transporter (only if email config is provided)
let transporter = null;
if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

// Booking endpoint
app.post('/api/bookings', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      specialRequests,
      roomType,
      checkIn,
      checkOut,
      adults,
      children,
    } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !roomType || !checkIn || !checkOut) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        required: ['fullName', 'email', 'phone', 'roomType', 'checkIn', 'checkOut']
      });
    }

    // Email to hotel
    const hotelMailOptions = {
      from: process.env.EMAIL_USER || 'noreply@luxstay.com',
      to: process.env.HOTEL_EMAIL || 'bookings@luxstay.com',
      subject: `New Booking Request - ${roomType}`,
      html: `
        <h2>New Booking Request</h2>
        <h3>Guest Information:</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Booking Details:</h3>
        <p><strong>Room Type:</strong> ${roomType}</p>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
        <p><strong>Number of Guests:</strong> ${adults} adults, ${children} children</p>
        
        ${specialRequests ? `<h3>Special Requests:</h3><p>${specialRequests}</p>` : ''}
      `,
    };

    // Confirmation email to guest
    const guestMailOptions = {
      from: process.env.EMAIL_USER || 'noreply@luxstay.com',
      to: email,
      subject: 'Booking Request Received - LuxStay Hotel',
      html: `
        <h2>Thank you for your booking request!</h2>
        <p>Dear ${fullName},</p>
        <p>We have received your booking request for ${roomType} at LuxStay Hotel.</p>
        
        <h3>Booking Details:</h3>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
        <p><strong>Number of Guests:</strong> ${adults} adults, ${children} children</p>
        
        <p>Our team will review your request and get back to you shortly with confirmation and further details.</p>
        
        <p>If you have any questions, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>LuxStay Hotel Team</p>
      `,
    };

    // Send emails if transporter is configured
    if (transporter) {
      try {
        await transporter.sendMail(hotelMailOptions);
        await transporter.sendMail(guestMailOptions);
      } catch (emailError) {
        console.error('Error sending emails:', emailError);
        // Continue even if email fails - still save the booking
      }
    } else {
      // Log booking to console if email is not configured
      console.log('=== NEW BOOKING REQUEST ===');
      console.log('Guest Information:', { fullName, email, phone });
      console.log('Booking Details:', { roomType, checkIn, checkOut, adults, children });
      if (specialRequests) {
        console.log('Special Requests:', specialRequests);
      }
      console.log('=== END BOOKING REQUEST ===');
    }

    res.status(200).json({ message: 'Booking request received successfully' });
  } catch (error) {
    console.error('Error processing booking:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      message: 'Error processing booking request', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// 404 handler (must be after all routes)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler (must be last)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  if (!transporter) {
    console.log('⚠️  Email transporter not configured - bookings will be logged to console');
  }
}); 