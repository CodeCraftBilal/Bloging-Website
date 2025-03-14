"use client"
import React, { useState, useEffect } from 'react';

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    setPosts(data);
    console.log(data);
    console.log('fetching data from server');
  };

  useEffect(() => {
    console.log("Fetching posts...");
    fetchPosts();
    console.log("Posts fetched!");
  }, []);

  return (
    <div className="p-5 flex bg-gray-100 gap-3 items-center justify-center flex-wrap">
      {posts.map((post) => (
        <div key={post.id} className="card w-[348px] max-w-md h-[456px] bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="img w-full h-48 bg-gray-400">
            <img src={post.src ? post.src : "empty.jpg"} alt="Post Image" className="w-full h-full object-cover" />
          </div>
          <div className="content p-4 text-black flex items-center flex-col">
            <div className='h-[190px] overflow-ellipsis'>
              <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
              <p className="text-gray-700 mb-4">{post.body}</p>
            </div>
            <div className="btn">
              <button className="bg-green-500 text-white px-4 py-2 rounded-2xl hover:bg-green-600 transition-all">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
