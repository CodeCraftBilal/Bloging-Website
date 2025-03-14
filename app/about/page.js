import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-black">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our blog! We are passionate about sharing knowledge and insights on various topics. Our mission is to provide valuable content that inspires, educates, and entertains our readers.
        </p>
        <p className="text-gray-700 mb-4">
          Our team consists of experienced writers and experts in different fields who are dedicated to bringing you the best information and stories. We believe in the power of words and the impact they can have on people's lives.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for visiting our blog. We hope you enjoy reading our posts as much as we enjoy creating them. If you have any questions or feedback, feel free to reach out to us.
        </p>
        <div className="text-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded-2xl hover:bg-green-600 transition-all">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
