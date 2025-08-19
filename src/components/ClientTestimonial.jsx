import React from 'react';

export const ClientTestimonial = ({ 
  name, 
  title, 
  rating = 5, 
  testimonial, 
  profileImage, 
  className = "" 
}) => {
  // Generate star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div 
      className={`relative ${className}`}
      style={{
        width: '398px',
        height: '260px',
        opacity: 1,
        backgroundColor: 'transparent',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        borderBottomLeftRadius: '40px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#B30D02'
      }}
    >
      {/* Star Rating - Top Right */}
      <div className="absolute top-8 right-8 flex space-x-1">
        {renderStars(rating)}
      </div>
      
      {/* Profile Image and Name - Bottom Left */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-3">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
          {profileImage ? (
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <p 
            className="text-black text-sm" 
            style={{ 
              fontFamily: 'Lato, sans-serif',
              fontWeight: 600
            }}
          >
            {name}
          </p>
          <p 
            className="text-black text-xs" 
            style={{ 
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400
            }}
          >
            {title}
          </p>
        </div>
      </div>
      
      {/* Testimonial Content - Center */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        {testimonial ? (
          <div className="text-center max-w-xs">
            <p 
              className="text-black"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center'
              }}
            >
              "{testimonial}"
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p 
              className="text-black"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center'
              }}
            >
              Click to add testimonial
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientTestimonial;
