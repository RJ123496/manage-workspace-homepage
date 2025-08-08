import React from 'react';

export const FeaturesPage = () => {
  const industries = [
    {
      id: 1,
      title: "Legal Firms",
      image: require("../assets/Features legal firms.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 2,
      title: "Manufacturing Industries",
      image: require("../assets/Manufacturing industuries.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 3,
      title: "Health Care Facilities",
      image: require("../assets/Healthcare facility.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 4,
      title: "Corporate Offices",
      image: require("../assets/Corparte office .png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 5,
      title: "Clinics",
      image: require("../assets/Clinics.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 6,
      title: "Hospitals",
      image: require("../assets/Hospital .png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 7,
      title: "Real Estate",
      image: require("../assets/Real estate.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 8,
      title: "Coworking Spaces",
      image: require("../assets/Co-Working Spaces.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 9,
      title: "Technology Startups",
      image: require("../assets/Tech start up.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 10,
      title: "Hospitality Industries",
      image: require("../assets/Hospitality industries.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 11,
      title: "Educational Institutions",
      image: require("../assets/Educational instution.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    },
    {
      id: 12,
      title: "Construction Industries",
      image: require("../assets/Construction.png"),
      description: "Efficiently organize client visits and approvals. Track billable hours and manage expenses. Coordinate meetings and events seamlessly."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={require('../assets/New transparent logo.png')}
                alt="Manage Workspace Logo" 
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-[#B30D02] font-medium transition-colors">Home</a>
              <a href="/#features" className="text-gray-600 hover:text-[#B30D02] font-medium transition-colors">Features</a>
              <a href="/" onClick={() => setTimeout(() => document.getElementById('subscription')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="text-gray-600 hover:text-[#B30D02] font-medium transition-colors">Subscription</a>
              <a href="/#about" className="text-gray-600 hover:text-[#B30D02] font-medium transition-colors">About</a>
              <a 
                href="/#services" 
                className="text-gray-600 hover:text-[#B30D02] font-medium transition-colors"
              >
                Industries
              </a>
              <a href="/#faq" className="text-gray-600 hover:text-[#B30D02] font-medium transition-colors">FAQ</a>
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/?openDemo=true';
                }}
                className="text-gray-600 hover:text-[#B30D02] font-medium transition-colors cursor-pointer"
              >
                Book Demo
              </a>
              <a href="/#contact" className="text-gray-600 hover:text-[#B30D02] font-medium transition-colors">Login</a>
            </nav>

            {/* CTA Button */}
            <button className="bg-[#B30D02] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Contact Us
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center" style={{ background: 'linear-gradient(270deg, #B30D02 0%, #4D0601 100%)' }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div 
                className="mb-6"
                style={{
                  width: '593px',
                  height: '186px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '48px',
                  lineHeight: '62px',
                  color: '#FFFFFF',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0
                }}
              >
                Smart Workspace Solutions for Every Industry
              </div>
              <div 
                className="mb-8"
                style={{
                  width: '593px',
                  height: '78px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '26px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  flex: 'none',
                  order: 1,
                  alignSelf: 'stretch',
                  flexGrow: 0
                }}
              >
                <ul className="space-y-2">
                  <li>• No two industries work in the same way</li>
                  <li>• Our platform is fully customizable</li>
                  <li>• Manage people, spaces, and data based on your needs</li>
                </ul>
              </div>
              <div className="flex justify-start">
                <button className="bg-white text-[#B30D02] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center ml-1">
                  Let's talk
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-end items-end mb-0">
              <img 
                src={require("../assets/fetures page hero section.png")}
                alt="Woman in VR glasses looking at website pages"
                className="w-full lg:w-full h-auto object-cover rounded-xl"
                style={{ maxWidth: '95%', marginBottom: '-100px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl lg:text-5xl font-bold mb-4"
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '36px',
                lineHeight: '54px',
                color: '#B30D02'
              }}
            >
              Workspace Solutions for Every Sector
            </h2>
            <p className="text-lg lg:text-xl text-black">
              We help businesses across industries manage space, teams & resources
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {industries.map((industry) => (
              <div 
                key={industry.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  padding: '32px',
                  gap: '16px',
                  width: '450px',
                  minHeight: '520px',
                  background: '#FFFFFF',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  border: 'none'
                }}
              >
                {/* Image */}
                <div 
                  className="w-full rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border-0"
                  style={{
                    width: '386px',
                    height: '240px',
                    borderRadius: '12px',
                    border: 'none'
                  }}
                >
                  <img 
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover rounded-xl border-0"
                    style={{ border: 'none' }}
                  />
                </div>

                {/* Industry Title */}
                <h3
                  className="flex-shrink-0 border-0"
                  style={{
                    width: '300px',
                    height: '30px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#000000',
                    margin: 0,
                    padding: 0,
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                    border: 'none',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {industry.title}
                </h3>
                <p
                  className="flex-shrink-0 border-0"
                  style={{
                    width: '252px',
                    height: '24px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'rgba(0, 0, 0, 0.8)',
                    margin: 0,
                    padding: 0,
                    flex: 'none',
                    order: 2,
                    flexGrow: 0,
                    border: 'none'
                  }}
                >
                  Collaborate. Organize. Succeed
                </p>
                <div
                  className="flex-grow border-0"
                  style={{
                    width: '365px',
                    height: '105px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: 'rgba(0, 0, 0, 0.8)',
                    margin: 0,
                    padding: 0,
                    flex: 'none',
                    order: 3,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                    border: 'none'
                  }}
                >
                  <ul className="space-y-3 list-none border-0">
                    <li className="flex items-start border-0">
                      <span className="mr-3 mt-1 text-[#B30D02] font-bold border-0">•</span>
                      <span className="border-0">Efficiently organize client visits and approvals</span>
                    </li>
                    <li className="flex items-start border-0">
                      <span className="mr-3 mt-1 text-[#B30D02] font-bold border-0">•</span>
                      <span className="border-0">Track billable hours and manage expenses</span>
                    </li>
                    <li className="flex items-start border-0">
                      <span className="mr-3 mt-1 text-[#B30D02] font-bold border-0">•</span>
                      <span className="border-0">Coordinate meetings and events seamlessly</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#B30D02] to-[#4D0601] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <p 
            className="text-white text-xl lg:text-2xl mb-12 max-w-4xl mx-auto"
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '54px',
              color: '#FFFFFF'
            }}
          >
            Trusted by teams across India to manage space, people, and productivity seamlessly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-white">
              <div className="text-4xl lg:text-6xl font-bold mb-2">45</div>
              <div className="text-lg lg:text-xl">Locations</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-6xl font-bold mb-2">35k+</div>
              <div className="text-lg lg:text-xl">Sq meters of workspace</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-6xl font-bold mb-2">24/7</div>
              <div className="text-lg lg:text-xl">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Story Section */}
      <section className="py-16 lg:py-24 bg-white" style={{ minHeight: '500px', position: 'relative' }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#B30D02] mb-4">
              Client Success Story
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              How Real Teams Unlock Real Results with ManageWorkspace
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8" style={{ marginTop: '118px' }}>
              {/* Client Info */}
              <div className="bg-transparent rounded-xl p-6 border-0">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏙️</span>
                  <h3 className="text-xl font-bold text-black">Client Story: Metro Desk Co.</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Industry:</strong> Real Estate & Co-working Operator</p>
                  <p><strong>Location:</strong> Hyderabad, India</p>
                  <p><strong>Team Size:</strong> 40+ (facility managers, client service, tech team)</p>
                  <p><strong>Workspace Type:</strong> Multi-location coworking hubs in 5 cities</p>
                </div>
              </div>

              {/* Challenge */}
              <div className="bg-transparent rounded-xl p-6 border-0">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🚧</span>
                  <h3 className="text-xl font-bold text-black">The Challenge</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Manual check-ins and visitor records across locations</li>
                  <li>• Difficulty managing bookings for meeting rooms and event</li>
                  <li>• Lack of centralized expense tracking per branch</li>
                  <li>• No unified system for membership renewals and client support</li>
                </ul>
              </div>

              {/* Features */}
              <div className="bg-transparent rounded-xl p-6 border-0">
                <h3 className="text-xl font-bold text-black mb-4">Key Features Implemented:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Visitor Management: QR-based check-ins across all branches</li>
                  <li>• Meeting Room Booking: real-time availability for teams & clients</li>
                  <li>• Membership Pass System: Custom durations + renewal reminders</li>
                  <li>• Admin Dashboard: Branch-wise data on usage, billing.</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Team Image */}
              <div className="w-full h-128 bg-transparent rounded-xl flex items-center justify-center border-0">
                <img 
                  src={require('../assets/5 joyful .png')}
                  alt="Joyful five colleagues" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Results */}
              <div className="bg-transparent rounded-xl p-6 border-0">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📈</span>
                  <h3 className="text-xl font-bold text-black">Outcomes in 3 Months</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• 100% secure & trackable guest flow</li>
                  <li>• Reduced booking conflicts by 90%</li>
                  <li>• Simplified branch-level reporting with smart exports</li>
                  <li>• Increased customer satisfaction via faster renewals & support</li>
                  <li>• Operational consistency across all 5 locations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div 
            className="relative bg-[#B30D02] rounded-[20px] p-6 text-white"
            style={{
              position: 'absolute',
              width: '1119px',
              height: '186px',
              left: '161px',
              top: '1084px',
              background: '#B30D02',
              borderRadius: '20px'
            }}
          >
            <div 
              className="flex items-start p-6"
              style={{
                width: '100%',
                height: '100%',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '200%',
                color: '#FFFFFF',
                marginTop: '-10px',
                paddingTop: '20px'
              }}
            >
              <span className="text-white text-2xl mr-3">💬</span>
              <div>
                <p className="text-white mb-2" style={{ margin: 0, padding: 0 }}>
                  "Manage Workspace helped us move from spreadsheets to a scalable platform. We can now manage five coworking hubs with one dashboard."
                </p>
                <p className="text-white" style={{ margin: 0, padding: 0 }}>
                  — Mihir Rathi, Regional Manager, Metro Desk Co.
                </p>
              </div>
            </div>
          </div>

          {/* Page indicator dots */}
          <div className="flex justify-center mt-8 space-x-2" style={{ marginTop: '300px' }}>
            <span className="block w-3 h-3 bg-[#B30D02] rounded-full"></span>
            <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFECEA]">
        {/* Email Signup */}
        <div className="py-12 lg:py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <img 
                src={require('../assets/New transparent logo.png')}
                alt="Manage Workspace Logo" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-lg lg:text-xl text-gray-700 mb-8">
              Get started up your business we will manage your workspace
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#B30D02]"
              />
              <button 
                onClick={() => {
                  window.location.href = '/';
                  setTimeout(() => document.getElementById('subscription')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="bg-[#B30D02] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Try Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-8 border-t border-gray-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-black mb-4">Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/#features" className="hover:text-[#B30D02] transition-colors">Visitor Management</a></li>
                  <li><a href="/#features" className="hover:text-[#B30D02] transition-colors">Space Booking</a></li>
                  <li><a href="/#features" className="hover:text-[#B30D02] transition-colors">Analytics</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-4">Plans & Pricings</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/" onClick={() => setTimeout(() => document.getElementById('subscription')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="hover:text-[#B30D02] transition-colors">Basic Plan</a></li>
                  <li><a href="/" onClick={() => setTimeout(() => document.getElementById('subscription')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="hover:text-[#B30D02] transition-colors">Pro Plan</a></li>
                  <li><a href="/" onClick={() => setTimeout(() => document.getElementById('subscription')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="hover:text-[#B30D02] transition-colors">Enterprise</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-4">News & Blogs</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/" className="hover:text-[#B30D02] transition-colors">Latest Updates</a></li>
                  <li><a href="/" className="hover:text-[#B30D02] transition-colors">Industry News</a></li>
                  <li><a href="/" className="hover:text-[#B30D02] transition-colors">Tips & Tricks</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-4">About Us</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/#about" className="hover:text-[#B30D02] transition-colors">Our Story</a></li>
                  <li><a href="/#about" className="hover:text-[#B30D02] transition-colors">Team</a></li>
                  <li><a href="/#about" className="hover:text-[#B30D02] transition-colors">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gradient-to-r from-[#B30D02] to-[#4D0601] py-4">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center text-white text-sm">
              <p>©2022 Manage Workspace. All rights reserved.</p>
              <div className="flex space-x-6 mt-2 sm:mt-0">
                <a href="/" className="hover:text-gray-200 transition-colors">Terms of Service</a>
                <a href="/" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
                <a href="/" className="hover:text-gray-200 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}; 