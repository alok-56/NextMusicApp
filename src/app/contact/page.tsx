"use client"
import React from 'react'
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Full-screen meteor effect with more meteors and faster animation */}
      <Meteors number={50}/>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-8">
        {/* Contact Us Title */}
        <p className="mt-2 text-3xl font-extrabold leading-8 sm:text-4xl tracking-tight text-white">
          Contact Us
        </p>

        {/* Contact Form */}
        <form className="w-full max-w-md p-6 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg">
          {/* Email Address */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required     
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full h-32 px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
