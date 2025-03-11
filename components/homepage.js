"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const posts = [
  { id: 1, title: "Post 1", content: "Content for post 1" },
  { id: 2, title: "Post 2", content: "Content for post 2" },
  { id: 3, title: "Post 3", content: "Content for post 3" },
  { id: 4, title: "Post 4", content: "Content for post 4" },
  { id: 5, title: "Post 5", content: "Content for post 5" },
];

export default function Home() {
  const [currentPost, setCurrentPost] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPost((prevPost) => (prevPost + 1) % posts.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/path/to/your/image.jpg"
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
        <h2 className="text-xl md:text-3xl">{posts[currentPost].title}</h2>
        <p className="mt-2">{posts[currentPost].content}</p>
      </div>
    </div>
  );
}