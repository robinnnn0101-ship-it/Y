'use client';

export default function PostCard({ post, onLike }) {
  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold">
          {post.username[0]?.toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold">@{post.username}</span>
            <span className="text-gray-500 text-sm">
              {new Date(post.createdAt).toLocaleString()}
            </span>
          </div>
          <p className="mt-1 whitespace-pre-wrap">{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              alt=""
              className="mt-3 rounded-2xl max-h-96 w-full object-cover border border-gray-800"
            />
          )}
          <div className="flex gap-6 mt-3 text-gray-500">
            <button
              onClick={() => onLike(post.id)}
              className="hover:text-red-400 flex items-center gap-1"
            >
              ♥ {post.likes}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}