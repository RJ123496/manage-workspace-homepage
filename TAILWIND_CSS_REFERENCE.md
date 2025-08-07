# 🎨 Complete Tailwind CSS Reference - Manage Workspace Project

## 📋 **Table of Contents**
1. [Header Section](#header-section)
2. [Hero Section](#hero-section)
3. [Contact Form](#contact-form)
4. [About Us Section](#about-us-section)
5. [Features Section](#features-section)
6. [Services Section](#services-section)
7. [Testimonials Section](#testimonials-section)
8. [Subscription Plans Section](#subscription-plans-section)
9. [FAQ Section](#faq-section)
10. [Footer Section](#footer-section)
11. [Color Palette](#color-palette)
12. [Responsive Breakpoints](#responsive-breakpoints)

---

## **Header Section**
```css
/* Container */
.bg-white .shadow-sm .sticky .top-0 .z-50
.max-w-[1440px] .mx-auto .px-6 .py-4

/* Layout */
.flex .justify-between .items-center
.hidden .lg:flex .items-center .space-x-8

/* Logo */
.flex .items-center .cursor-pointer
.h-10 .w-auto

/* Navigation Links */
.text-gray-600 .hover:text-[#b30d02] .font-medium .transition-colors .duration-200 .relative .group
.absolute .-bottom-1 .left-0 .w-0 .h-0.5 .bg-[#b30d02] .group-hover:w-full .transition-all .duration-200

/* CTA Button */
.bg-[#b30d02] .text-white .px-6 .py-2.5 .rounded-lg .font-medium .hover:bg-red-700 .transition-all .duration-200 .shadow-lg .hover:shadow-xl .transform .hover:-translate-y-0.5

/* Mobile Menu */
.lg:hidden .p-2 .rounded-lg .hover:bg-gray-100 .transition-colors
.w-6 .h-6 .text-gray-600
.lg:hidden .mt-4 .pb-4 .border-t .border-gray-200
.flex .flex-col .space-y-4 .pt-4
```

---

## **Hero Section**
```css
/* Section Container */
.relative .bg-[#FFECEA] .overflow-hidden

/* Desktop Layout */
.hidden .lg:block .w-full .max-w-[1440px] .h-[1000px] .mx-auto .relative .lg:w-[1440px]

/* Absolute Positioning (Desktop) */
.absolute .top-12 .left-16 .w-[160px] .h-[220px] .z-10
.absolute .top-8 .right-12 .w-[133.73px] .h-[205.17px] .z-10
.absolute .bottom-8 .left-20 .w-[202px] .h-[294.47px] .z-10
.absolute .bottom-12 .right-16 .w-[244px] .h-[226.47px] .z-10
.absolute .left-[502px] .top-[557px] .z-20

/* Typography (Desktop) */
.text-6xl .font-bold .text-gray-800 .mb-6 .max-w-4xl .mx-auto .leading-tight
.text-lg .text-gray-600 .mb-8 .max-w-xl .mx-auto

/* Mobile Layout */
.lg:hidden .w-full .px-4 .py-8
.text-3xl .font-bold .text-gray-800 .mb-4 .leading-tight
.text-base .text-gray-600 .mb-6 .max-w-lg .mx-auto

/* Images */
.w-full .h-full .object-cover .rounded-2xl
.w-[476px] .h-[604px] .object-contain
.w-[280px] .h-[355px] .object-contain
.grid .grid-cols-2 .gap-4 .max-w-sm .mx-auto
.w-full .h-32 .object-cover .rounded-lg
```

---

## **Contact Form**
```css
/* Container */
.max-w-4xl .mx-auto .bg-white .rounded-2xl .p-3 .sm:p-4 .md:p-6 .lg:p-8 .shadow-2xl .border .border-gray-100 .relative .z-20

/* Typography */
.text-xl .sm:text-2xl .md:text-3xl .lg:text-4xl .font-bold .text-gray-800 .mb-2 .text-center
.text-xs .sm:text-sm .md:text-base .text-gray-600 .mb-4 .sm:mb-6 .lg:mb-8 .text-center

/* Form Layout */
.space-y-3 .sm:space-y-4 .md:space-y-6
.grid .grid-cols-1 .sm:grid-cols-2 .md:grid-cols-4 .gap-2 .sm:gap-3 .md:gap-4

/* Input Fields */
.w-full .border .rounded-lg .px-2 .sm:px-3 .md:px-4 .py-2 .sm:py-2.5 .md:py-3 .text-xs .sm:text-sm .focus:outline-none .focus:ring-1 .transition-all .duration-200
.border-red-300 .focus:border-red-500 .focus:ring-red-200
.border-gray-300 .focus:border-gray-400 .focus:ring-gray-200

/* Filter Buttons */
.flex .flex-col .md:flex-row .md:items-center .md:justify-between .gap-3 .sm:gap-4 .md:gap-6
.flex .flex-wrap .gap-1.5 .sm:gap-2
.px-2 .sm:px-3 .md:px-4 .py-1.5 .sm:py-2 .rounded-full .text-xs .sm:text-sm .font-medium .transition-all .duration-200
.bg-gray-600 .text-white .shadow-md
.bg-gray-200 .text-gray-700 .hover:bg-gray-300

/* Submit Button */
.w-full .sm:w-auto .bg-red-600 .text-white .font-medium .py-2 .sm:py-2.5 .md:py-3 .px-6 .sm:px-8 .md:px-12 .rounded-lg .hover:bg-red-700 .transition-all .duration-200 .disabled:opacity-50 .disabled:cursor-not-allowed .flex .items-center .justify-center .shadow-lg .hover:shadow-xl

/* Status Messages */
.mb-4 .p-3 .bg-green-50 .border .border-green-200 .rounded-lg
.text-green-800 .text-sm .font-medium
.mb-4 .p-3 .bg-red-50 .border .border-red-200 .rounded-lg
.text-red-800 .text-sm .font-medium

/* Loading Spinner */
.animate-spin .-ml-1 .mr-3 .h-5 .w-5 .text-white
.opacity-25 .opacity-75
```

---

## **About Us Section**
```css
/* Section Container */
.bg-white .py-12 .sm:py-16 .lg:py-20
.w-full .max-w-[1440px] .mx-auto .px-4 .sm:px-6 .lg:px-8

/* Typography */
.text-2xl .sm:text-3xl .lg:text-4xl .xl:text-5xl .font-bold .text-[#b30d02] .mb-8 .lg:mb-12 .text-left
.text-xl .sm:text-2xl .lg:text-3xl .xl:text-4xl .font-bold .text-[#b30d02] .mb-4 .lg:mb-6
.text-gray-700 .text-sm .sm:text-base .lg:text-lg .leading-relaxed

/* Layout */
.grid .grid-cols-1 .lg:grid-cols-2 .gap-8 .lg:gap-12 .items-center .mb-12 .lg:mb-16
.order-2 .lg:order-1
.order-1 .lg:order-2

/* Image */
.w-full .h-[240px] .sm:h-[280px] .md:h-[320px] .lg:h-[360px] .xl:h-[400px] .object-cover .shadow-2xl .hover:shadow-3xl .transition-shadow .duration-300 .rounded-lg

/* Stats Grid */
.grid .grid-cols-1 .sm:grid-cols-2 .lg:grid-cols-3 .gap-4 .sm:gap-6 .lg:gap-8 .text-center
.bg-gradient-to-br .from-gray-50 .to-gray-100 .p-6 .sm:p-8 .rounded-xl .shadow-lg .hover:shadow-xl .transition-all .duration-300 .hover:-translate-y-1
.text-2xl .sm:text-3xl .lg:text-4xl .font-bold .text-[#b30d02] .mb-2
.text-gray-600 .font-semibold .text-xs .sm:text-sm .lg:text-base .uppercase .tracking-wide
```

---

## **Features Section**
```css
/* Section Container */
.bg-gradient-to-r .from-[#ff8c84] .via-[#d9372d] .to-[#b30d02] .py-12 .sm:py-16 .lg:py-20
.w-full .max-w-[1440px] .mx-auto .px-4 .sm:px-6 .lg:px-8

/* Typography */
.text-2xl .sm:text-3xl .lg:text-4xl .xl:text-5xl .font-bold .text-white .mb-8 .lg:mb-12 .text-center

/* Grid Layout */
.grid .grid-cols-1 .sm:grid-cols-2 .lg:grid-cols-3 .gap-6 .lg:gap-8

/* Feature Cards */
.text-white .p-4 .sm:p-6 .bg-white/10 .rounded-lg .backdrop-blur-sm .hover:bg-white/20 .transition-all .duration-300
.text-lg .sm:text-xl .lg:text-2xl .font-semibold .mb-3 .lg:mb-4
.text-white/90 .text-sm .sm:text-base .leading-relaxed
```

---

## **Services Section**
```css
/* Section Container */
.bg-[#FFECEA] .py-12 .sm:py-16 .lg:py-20
.max-w-[1440px] .mx-auto .px-4 .sm:px-6 .lg:px-8

/* Typography */
.text-left .text-2xl .sm:text-3xl .lg:text-4xl .font-bold .mb-8 .lg:mb-12 .text-[#D40000]

/* Desktop Carousel */
.hidden .sm:flex .overflow-x-auto .space-x-6 .snap-x .scroll-smooth .pb-6 .scrollbar-hide

/* Service Cards */
.w-[320px] .sm:w-[360px] .lg:w-[397px] .h-auto .min-h-[500px] .lg:min-h-[562px] .flex-shrink-0 .snap-center .rounded-lg .shadow-lg .bg-white .p-4 .flex .flex-col
.w-full .h-[200px] .sm:h-[220px] .lg:h-[256px] .object-cover .rounded-lg .mb-4
.text-lg .font-semibold .mt-4 .mb-2
.text-sm .text-gray-500 .mb-4
.text-sm .text-gray-700 .mb-6 .space-y-2 .flex-grow

/* Service Buttons */
.flex .space-x-4 .justify-center
.w-[160px] .h-[48px] .border .border-red-600 .text-red-600 .rounded-lg .hover:bg-red-50 .transition-colors
.w-[160px] .h-[48px] .bg-red-600 .text-white .rounded-lg .hover:bg-red-700 .transition-colors

/* Mobile Grid */
.sm:hidden .grid .grid-cols-1 .gap-6
.rounded-lg .shadow-lg .bg-white .p-4 .flex .flex-col
.w-full .h-[200px] .object-cover .rounded-lg .mb-4
.flex .flex-col .space-y-3

/* Pagination Dots */
.hidden .sm:flex .justify-center .mt-6 .space-x-2
.rounded-full .w-2 .h-2 .bg-red-600
.rounded-full .w-2 .h-2 .bg-gray-400
```

---

## **Testimonials Section**
```css
/* Section Container */
.bg-gray-50 .py-12 .sm:py-16 .lg:py-20
.w-full .max-w-[1440px] .mx-auto .px-4 .sm:px-6 .lg:px-8

/* Typography */
.text-center .mb-8 .lg:mb-12
.text-2xl .sm:text-3xl .lg:text-4xl .font-thin .text-black .mb-4 .lg:mb-6
.text-base .sm:text-lg .text-gray-500 .mb-8

/* Layout */
.flex .flex-col .gap-8 .lg:gap-12

/* Gallery Image */
.w-full .flex .justify-center
.w-full .max-w-sm .sm:max-w-md .md:max-w-lg .lg:max-w-xl .xl:max-w-4xl .h-auto .object-contain .rounded-xl

/* Client Images - Desktop */
.hidden .md:flex .gap-4 .lg:gap-6 .justify-center
.rounded-xl .overflow-hidden .flex-shrink-0
.w-[280px] .lg:w-[320px] .xl:w-[398px] .h-[180px] .lg:h-[210px] .xl:h-[260px] .object-cover

/* Client Images - Mobile */
.md:hidden .space-y-4 .sm:space-y-6
.rounded-xl .overflow-hidden
.w-full .h-[200px] .sm:h-[240px] .object-cover
```

---

## **Subscription Plans Section**
```css
/* Section Container */
.py-12 .sm:py-16 .lg:py-20 .px-4 .sm:px-6 .bg-white
.max-w-[1200px] .mx-auto

/* Typography */
.text-2xl .sm:text-3xl .lg:text-4xl .font-bold .text-gray-800 .mb-4 .text-center
.text-base .sm:text-lg .lg:text-xl .text-gray-600 .text-center .mb-8 .sm:mb-12 .px-4

/* Toggle Buttons */
.flex .justify-center .mb-12 .lg:mb-16
.bg-[#ffecea] .rounded-2xl .p-2 .flex .w-full .max-w-xs .sm:max-w-sm
.flex-1 .px-4 .sm:px-6 .py-2 .sm:py-3 .rounded-lg .text-sm .sm:text-base .font-semibold .transition-colors
.bg-[#b30d02] .text-white
.text-gray-700 .hover:text-[#b30d02]

/* Plans Grid */
.grid .grid-cols-1 .md:grid-cols-2 .lg:grid-cols-3 .gap-6 .lg:gap-8

/* Plan Cards */
.relative .bg-white .rounded-3xl .p-6 .sm:p-8 .text-center .transition-all .duration-300 .cursor-pointer .hover:border-[#b30d02] .hover:shadow-xl .hover:scale-105
.border-2 .border-gray-200 .shadow-xl
.border-2 .border-gray-200 .shadow-lg

/* Plan Typography */
.text-lg .sm:text-xl .lg:text-2xl .font-semibold .text-gray-800 .mb-3 .sm:mb-4
.text-3xl .sm:text-4xl .lg:text-5xl .font-bold .text-gray-800 .mb-2
.text-gray-500 .text-base .sm:text-lg .mb-4 .sm:mb-6
.text-sm .sm:text-base .text-gray-600 .mb-6 .sm:mb-8 .leading-relaxed

/* Features List */
.text-left .text-gray-700 .mb-6 .sm:mb-8 .space-y-2
.flex .items-center .text-sm .sm:text-base
.w-2 .h-2 .bg-[#b30d02] .rounded-full .mr-3 .flex-shrink-0

/* Plan Buttons */
.w-full .py-2 .sm:py-3 .px-4 .sm:px-6 .rounded-3xl .text-sm .sm:text-base .font-semibold .transition-colors .mb-3 .sm:mb-4 .border-2 .border-[#b30d02] .text-[#b30d02] .hover:bg-[#b30d02] .hover:text-white
.text-gray-500 .text-xs .sm:text-sm

/* Modal Styles */
.fixed .inset-0 .bg-black .bg-opacity-50 .flex .items-center .justify-center .z-50
.bg-white .rounded-2xl .p-8 .max-w-md .w-full .mx-4 .relative
.absolute .top-4 .right-4 .text-gray-500 .hover:text-gray-700 .text-2xl
.text-2xl .font-bold .text-gray-800 .mb-4 .text-center
.text-gray-600 .mb-6 .text-center
.space-y-4
.block .text-gray-700 .text-sm .font-medium .mb-2
.w-full .border .border-gray-300 .rounded-lg .px-4 .py-2 .focus:outline-none .focus:border-[#b30d02]
.w-full .bg-[#b30d02] .text-white .py-3 .rounded-lg .font-semibold .hover:bg-red-700 .transition-colors
.text-xs .text-gray-500 .text-center .mt-4
```

---

## **FAQ Section**
```css
/* Section Container */
.py-20 .px-6 .bg-gray-50
.max-w-[1000px] .mx-auto

/* Typography */
.text-4xl .font-bold .text-gray-800 .mb-8 .text-center
.mb-12
.text-5xl .font-bold .mb-4
.text-gray-800
.text-gray-400

/* FAQ Container */
.bg-white .rounded-lg .shadow-lg
.border-b .border-gray-200 .last:border-b-0

/* FAQ Items */
.w-full .px-8 .py-6 .text-left .flex .justify-between .items-center .hover:bg-gray-50 .transition-colors
.text-xl .font-semibold .text-gray-800 .pr-8
.flex .items-center .justify-center .w-8 .h-8 .rounded-full .bg-gray-100 .flex-shrink-0
.w-4 .h-4 .text-gray-600

/* FAQ Answers */
.px-6 .lg:px-8 .pb-6 .lg:pb-8 .animate-fadeIn
.pt-4 .border-t .border-gray-100
.text-gray-700 .text-base .lg:text-lg .leading-relaxed
```

---

## **Footer Section**
```css
/* Footer Container */
.bg-[#ffecea]

/* Main Footer */
.py-12 .sm:py-16 .px-4 .sm:px-6
.max-w-[1200px] .mx-auto .text-center

/* Logo */
.flex .justify-center .items-center .mb-6 .sm:mb-8
.h-12 .sm:h-16 .w-auto

/* Description */
.text-base .sm:text-lg .text-gray-700 .mb-6 .sm:mb-8 .max-w-md .mx-auto .px-4

/* Email Signup */
.flex .justify-center .mb-8 .sm:mb-12
.flex .flex-col .sm:flex-row .max-w-md .w-full .px-4 .sm:px-0
.relative .flex-1 .mb-3 .sm:mb-0
.w-full .px-10 .sm:px-12 .py-3 .rounded-3xl .sm:rounded-l-3xl .sm:rounded-r-none .border .border-gray-300 .focus:outline-none .focus:border-[#b30d02] .text-sm .sm:text-base
.absolute .left-3 .sm:left-4 .top-1/2 .transform .-translate-y-1/2
.w-4 .sm:w-5 .h-4 .sm:h-5 .text-gray-400
.bg-[#b30d02] .text-white .px-6 .sm:px-8 .py-3 .rounded-3xl .sm:rounded-l-none .sm:rounded-r-3xl .hover:bg-red-700 .transition-colors .text-sm .sm:text-base .font-medium

/* Navigation Links */
.mb-6 .sm:mb-8
.flex .flex-wrap .justify-center .gap-4 .sm:gap-6 .lg:gap-8 .px-4
.text-gray-700 .hover:text-[#b30d02] .transition-colors .text-xs .sm:text-sm .cursor-pointer .text-center

/* Bottom Bar */
.bg-[#b30d02] .py-3 .sm:py-4 .px-4 .sm:px-6
.max-w-[1200px] .mx-auto .flex .flex-col .sm:flex-row .justify-between .items-center .text-white .text-xs .sm:text-sm .gap-3 .sm:gap-0
.text-center .sm:text-left
.flex .flex-wrap .justify-center .gap-4 .sm:gap-6
.hover:text-gray-200 .transition-colors .cursor-pointer .text-center
```

---

## **Color Palette**

### **Primary Colors:**
```css
/* Brand Red */
.text-[#b30d02]
.bg-[#b30d02]
.border-[#b30d02]
.hover:text-[#b30d02]
.hover:bg-[#b30d02]
.focus:border-[#b30d02]

/* Brand Red Variants */
.text-[#D40000]
.hover:bg-red-700
.hover:bg-red-50

/* Brand Pink Background */
.bg-[#FFECEA]
.bg-[#ffecea]
```

### **Gradient Colors:**
```css
/* Features Section Gradient */
.bg-gradient-to-r .from-[#ff8c84] .via-[#d9372d] .to-[#b30d02]

/* Stats Cards Gradient */
.bg-gradient-to-br .from-gray-50 .to-gray-100
```

### **Gray Scale:**
```css
/* Text Colors */
.text-gray-800    /* Dark headings */
.text-gray-700    /* Body text */
.text-gray-600    /* Secondary text */
.text-gray-500    /* Muted text */
.text-gray-400    /* Placeholder text */

/* Background Colors */
.bg-gray-50      /* Light background */
.bg-gray-100     /* Card backgrounds */
.bg-gray-200     /* Button backgrounds */

/* Border Colors */
.border-gray-100
.border-gray-200
.border-gray-300
```

### **Status Colors:**
```css
/* Success */
.bg-green-50 .border-green-200 .text-green-800

/* Error */
.bg-red-50 .border-red-200 .text-red-800
.border-red-300 .focus:border-red-500 .focus:ring-red-200
```

---

## **Responsive Breakpoints**

```css
/* Tailwind Default Breakpoints */
/* sm: 640px  - Small tablets */
/* md: 768px  - Tablets */
/* lg: 1024px - Small laptops */
/* xl: 1280px - Desktops */
/* 2xl: 1536px - Large screens */

/* Common Responsive Patterns */

/* Typography Scaling */
.text-xs .sm:text-sm .md:text-base .lg:text-lg
.text-2xl .sm:text-3xl .lg:text-4xl .xl:text-5xl

/* Spacing Scaling */
.p-3 .sm:p-4 .md:p-6 .lg:p-8
.py-12 .sm:py-16 .lg:py-20
.px-4 .sm:px-6 .lg:px-8
.gap-4 .sm:gap-6 .lg:gap-8

/* Grid Layouts */
.grid-cols-1 .sm:grid-cols-2 .lg:grid-cols-3
.grid-cols-1 .md:grid-cols-2 .lg:grid-cols-3
.grid-cols-1 .sm:grid-cols-2 .md:grid-cols-4

/* Flex Direction */
.flex-col .sm:flex-row .md:flex-col .lg:flex-row

/* Show/Hide Elements */
.hidden .lg:block
.lg:hidden
.hidden .sm:flex
.sm:hidden

/* Width Scaling */
.w-[280px] .sm:w-[320px] .lg:w-[397px]
.max-w-sm .sm:max-w-md .lg:max-w-xl .xl:max-w-4xl
```

---

## **Custom CSS Classes**

### **From index.css:**
```css
/* Custom Animations */
.animate-fadeIn
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scrollbar Hide */
.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Custom Font Families */
.font-poppins-regular
.font-poppins-semibold
.font-poppins-bold
.font-crimson-text
.font-outfit-semibold

/* Smooth Scrolling */
html { scroll-behavior: smooth; }

/* Custom Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f1f1; }
::-webkit-scrollbar-thumb { background: #b30d02; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #8b0a01; }
```

---

## **Special Utility Classes**

### **Backdrop Effects:**
```css
.backdrop-blur-sm
.bg-white/10
.bg-white/20
```

### **Transform Effects:**
```css
.hover:-translate-y-0.5
.hover:-translate-y-1
.hover:scale-105
.transform .-translate-y-1/2
```

### **Advanced Positioning:**
```css
.snap-x .snap-center
.scroll-smooth
.flex-shrink-0
.object-contain
.object-cover
.overflow-x-auto
.overflow-hidden
```

### **Advanced Typography:**
```css
.leading-tight
.leading-relaxed
.tracking-wide
.uppercase
.font-thin
.font-medium
.font-semibold
.font-bold
```

---

This comprehensive reference covers all Tailwind CSS classes used throughout your Manage Workspace project, organized by section and purpose. Use this as a quick reference for maintaining consistency and understanding the styling structure of your application.