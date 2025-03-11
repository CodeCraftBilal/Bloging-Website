"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const posts = [
  { id: 1, title: "Post 1", content: "Content for post 1", src: "/public/post1.jpg" },
  { id: 2, title: "Post 2", content: "Content for post 2", src: "/public/post2.jpg" },
  { id: 3, title: "Post 3", content: "Content for post 3", src: "/public/post3.jpg" },
  { id: 4, title: "Post 4", content: "Content for post 4", src: "/public/post4.jpg" },
  { id: 5, title: "Post 5", content: "Content for post 5", src: "/public/post5.jpg" },
];

export default function Hero() {
  const [currentPost, setCurrentPost] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPost((prevPost) => (prevPost + 1) % posts.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={currentPost.src}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-4">
        <h1 className="text-2xl md:text-4xl">Welcome to My Blog</h1>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h2 className="text-xl md:text-3xl">
          {posts[currentPost].title}
        </h2>
        <p className="mt-2">
          {posts[currentPost].content}
        </p>
      </div>
    </div>
  );
}