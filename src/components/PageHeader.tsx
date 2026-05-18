interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundColor: backgroundImage ? undefined : 'rgb(17, 24, 39)'
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-200 mb-8 font-light max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageHeader 