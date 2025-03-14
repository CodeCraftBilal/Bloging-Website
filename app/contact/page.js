"use client"
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <div className="w-[60%] bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <form className="space-y-4 mb-8">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" rows="4" placeholder="Your Message"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-2xl hover:bg-green-600 transition-all">Send Message</button>
          </div>
        </form>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Our Contacts</h2>
          <p className="text-gray-700 mb-2">Mobile: +123 456 7890</p>
          <p className="text-gray-700 mb-2">WhatsApp: +123 456 7890</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <FaInstagram size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={30} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
