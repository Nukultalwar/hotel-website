import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        {
          rootMargin: '50px',
          threshold: 0.1
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      const currentRef = imgRef.current;
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    } else {
      setIsInView(true);
    }
  }, [priority]);

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    const sizes = [640, 750, 828, 1080, 1200, 1920];
    const imageUrl = new URL(src, window.location.origin);
    
    return sizes
      .map(size => {
        imageUrl.searchParams.set('w', size.toString());
        return `${imageUrl.toString()} ${size}w`;
      })
      .join(', ');
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ 
        paddingBottom: height && width ? `${(height / width) * 100}%` : '56.25%' 
      }}
    >
      {(isInView || priority) && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          srcSet={generateSrcSet()}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
      <div
        className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export default OptimizedImage; 