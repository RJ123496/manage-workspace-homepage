import React from "react";
import clientsGallery from "../assets/hero/Our Clients.png";
import { ClientTestimonial } from "./ClientTestimonial";

export const TestimonialsSection = () => {

  return (
    <section id="testimonials" className="bg-white py-2 sm:py-6 lg:py-8 xl:py-10">
      <div className="w-full">
        {/* Title at the top */}
        <div className="text-center mb-4 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#B30D02] mb-2 sm:mb-4 lg:mb-6 text-center">
            Our Clients Reviews
          </h2>
          <p className="w-full max-w-[481px] h-auto text-sm sm:text-base lg:text-lg text-gray-500 mb-4 sm:mb-8 mx-auto">
            Trusted by creators and leaders from various industries.
          </p>
        </div>

        {/* Main content layout */}
        <div className="flex flex-col gap-3 sm:gap-8 lg:gap-12">
          {/* Top - Client images gallery */}
          <div className="w-full">
            <img
              src={clientsGallery}
              alt="Our clients and business showcase"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Trusted by Leaders Section Header */}
          <div className="w-full">
            <div className="relative w-full">

              
              {/* Main text with lines */}
              <div className="flex items-center justify-center space-x-8">
                <div className="flex-1 h-px bg-red-600"></div>
                <h3 
                  className="whitespace-nowrap px-8"
                  style={{
                    fontFamily: 'Outfit',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    width: '368px',
                    height: '25px',
                    opacity: 1,
                    color: '#B30D02',
                    textAlign: 'left',
                    marginLeft: '-20px'
                  }}
                >
                  Trusted by leaders from various industries
                </h3>
                <div className="flex-1 h-px bg-red-600"></div>
              </div>
            </div>
          </div>

          {/* Testimonials Cards - Scrollable Carousel */}
          <div className="w-full">
            <div className="w-full">
              <div className="flex overflow-x-auto gap-4 sm:gap-6 lg:gap-8 pb-6 scrollbar-hide">
                <div className="flex-shrink-0 w-[240px] sm:w-[320px] lg:w-[398px] h-[200px] sm:h-[300px] lg:h-[350px]">
                  <ClientTestimonial
                    name="James K."
                    title="UI UX Designer"
                    rating={5}
                    testimonial="I love how simple the login process is, and the dashboard greets me personally every time."
                    profileImage={require("../assets/hero/james.png")}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-shrink-0 w-[240px] sm:w-[320px] lg:w-[398px] h-[200px] sm:h-[300px] lg:h-[350px]">
                  <ClientTestimonial
                    name="Sarah Johnson"
                    title="Startup Founder"
                    rating={5}
                    testimonial="ManageWorkspace has streamlined our daily operations—login is quick and secure!"
                    profileImage={require("../assets/hero/Sarah.png")}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-shrink-0 w-[240px] sm:w-[320px] lg:w-[398px] h-[200px] sm:h-[300px] lg:h-[350px]">
                  <ClientTestimonial
                    name="Harsha Vardhan P."
                    title="Digital Marketer"
                    rating={5}
                    testimonial="I love the variety of spaces available! Whether I need a quiet spot or a collaborative space, wordbook always has the perfect option."
                    profileImage={require("../assets/hero/Harsha.png")}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-shrink-0 w-[240px] sm:w-[320px] lg:w-[398px] h-[200px] sm:h-[300px] lg:h-[350px]">
                  <ClientTestimonial
                    name="Emily Rodriguez"
                    title="VP Operations, GrowthCorp"
                    rating={5}
                    testimonial="The comprehensive features and ease of use make this platform essential for modern workspace management."
                    profileImage={require("../assets/hero/emily.png")}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-shrink-0 w-[240px] sm:w-[320px] lg:w-[398px] h-[200px] sm:h-[300px] lg:h-[350px]">
                  <ClientTestimonial
                    name="Michael Chen"
                    title="Product Manager, TechFlow"
                    rating={5}
                    testimonial="The visitor management system is incredibly efficient. We've reduced check-in time by 70% since implementing ManageWorkspace."
                    profileImage={require("../assets/hero/micheal.png")}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-shrink-0 w-[240px] sm:w-[320px] lg:w-[398px] h-[200px] sm:h-[300px] lg:h-[350px]">
                  <ClientTestimonial
                    name="Lisa Thompson"
                    title="Office Manager, Creative Studios"
                    rating={5}
                    testimonial="Managing our coworking spaces has never been easier. The platform handles everything from bookings to billing seamlessly."
                    profileImage={require("../assets/hero/Lisa.png")}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Background Section */}
          <div 
            className="w-full faq-background-section"
            style={{
              backgroundImage: `url(${require("../assets/hero/FAQ.png")})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '400px',
              height: 'clamp(400px, 60vh, 671px)'
            }}
          >
          </div>
        </div>
      </div>
    </section>
  );
};