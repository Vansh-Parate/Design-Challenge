import React from 'react'

// It's a function that returns JSX (HTML-like syntax in JavaScript)
export function PricingSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl tracking-tighter font-semibold text-gray-900 mb-2">
          Pricing plans
        </h1>
        <p className="text-xs font-medium tracking-tighter text-gray-600">
          Choose the right plan for your needs.
        </p>
      </div>

      {/* This is the pricing cards container */}
      {/* grid = CSS Grid layout */}
      {/* md:grid-cols-3 = on medium screens and up, show 3 columns */}
      {/* gap-8 = gap between grid items of 2rem (32px) */}
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Starter Plan Card */}
        {/* bg-white = white background */}
        {/* rounded-lg = rounded corners */}
        {/* shadow-lg = large shadow effect */}
        {/* p-8 = padding of 2rem (32px) */}
        {/* relative = for positioning the badge */}
        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          
          {/* Badge in top-left corner */}
          {/* absolute = position absolutely within the card */}
          {/* top-4 left-4 = 1rem from top and left */}
          {/* bg-gray-100 = light gray background */}
          {/* text-gray-700 = dark gray text */}
          {/* px-3 py-1 = horizontal padding 0.75rem, vertical 0.25rem */}
          {/* rounded-full = fully rounded corners */}
          {/* text-sm = small font size */}
          {/* font-medium = medium font weight */}
          <div className="absolute top-4 left-4 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            Starter
          </div>
          
          {/* Price section */}
          {/* text-center = center the price */}
          {/* mb-6 = margin bottom of 1.5rem (24px) */}
          <div className="text-center mb-6">
            
            {/* Price amount */}
            {/* text-5xl = very large font size */}
            {/* font-bold = bold font weight */}
            {/* text-gray-900 = dark gray color */}
            {/* mb-2 = margin bottom of 0.5rem (8px) */}
            <div className="text-5xl font-bold text-gray-900 mb-2">
              $0
            </div>
            
            {/* Price period */}
            {/* text-gray-600 = medium gray color */}
            {/* text-lg = large font size */}
            <div className="text-gray-600 text-lg">
              /month
            </div>
          </div>
          
          {/* Description */}
          {/* text-center = center the text */}
          {/* mb-8 = margin bottom of 2rem (32px) */}
          <div className="text-center mb-8">
            <p className="text-gray-900">
              Perfect For Small Teams
            </p>
          </div>
          
          {/* Call to action button */}
          {/* w-full = full width */}
          {/* bg-gray-900 = dark background */}
          {/* text-white = white text */}
          {/* py-3 = vertical padding of 0.75rem (12px) */}
          {/* rounded-lg = rounded corners */}
          {/* font-semibold = semi-bold font weight */}
          {/* hover:bg-gray-800 = darker background on hover */}
          {/* transition-colors = smooth color transition */}
          {/* mb-8 = margin bottom of 2rem (32px) */}
          <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-8">
            Start Hiring
          </button>
          
          {/* Features list */}
          {/* space-y-3 = vertical spacing between items */}
          <div className="space-y-3">
            
            {/* Feature item */}
            {/* flex = flexbox layout */}
            {/* items-center = center items vertically */}
            {/* space-x-3 = horizontal spacing between icon and text */}
            <div className="flex items-center space-x-3">
              {/* Checkmark icon */}
              {/* text-green-500 = green color */}
              {/* w-5 h-5 = width and height of 1.25rem (20px) */}
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {/* Feature text */}
              <span className="text-gray-700">3 Projects</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">AI Applicant Screening</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">AI Recruiter</span>
            </div>
          </div>
        </div>

        {/* Professional Plan Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          
          {/* Professional badge with gradient */}
          {/* bg-gradient-to-r = gradient from left to right */}
          {/* from-purple-500 to-blue-500 = purple to blue gradient */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            PROFESSIONAL
          </div>
          
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              $99
            </div>
            <div className="text-gray-600 text-lg">
              /month
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-900">
              Perfect For Growing Teams
            </p>
          </div>
          
          <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-8">
            Start Hiring
          </button>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Unlimited Projects</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">AI Applicant Screening</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">AI Recruiter</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Risk-Free Guarantee</span>
            </div>
          </div>
        </div>

        {/* Enterprise Plan Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          
          <div className="absolute top-4 left-4 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            ENTERPRISE
          </div>
          
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              Custom
            </div>
            <div className="text-gray-600 text-lg">
              &nbsp;
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-900">
              For Large Organizations
            </p>
          </div>
          
          <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-8">
            Contact Us
          </button>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Unlimited Projects</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">AI Applicant Screening</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Custom Skill Assessments</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="text-green-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Custom AI Recruiter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
