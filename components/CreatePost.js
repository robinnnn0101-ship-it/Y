'use client';

import { useState } from 'react';

export default function CreatePost({ onPost }) {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onPost({ username, content, image });
    setContent('');
    setImage('');
  };

  return (
    <form onSubmit={submit} className="border border-gray-800 rounded-2xl p-4 mb-6">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full bg-transparent border-b border-gray-700 pb-2 mb-3 outline-none"
      />
      <textarea
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full bg-transparent resize-none outline-none min-h-[80px]"
        rows={3}
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 mt-2 text-sm"
      />
      <button
        type="submit"
        className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-full"
      >
        Post
      </button>
    </form>
  );
}