'use client';

import { useState, useEffect } from 'react';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const load = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handlePost = async (data) => {
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    load();
  };

  const handleLike = async (id) => {
    await fetch(`/api/posts/${id}/like`, { method: 'POST' });
    load();
  };

  return (
    <div className="py-4">
      <CreatePost onPost={handlePost} />
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
}