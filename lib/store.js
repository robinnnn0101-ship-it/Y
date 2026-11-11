import { v4 as uuid } from 'uuid';

// In-memory store (resets on restart). Replace with DB later.
let posts = [
  {
    id: uuid(),
    username: 'elon',
    content: 'Just launched something cool. Who else is building?',
    image: 'https://picsum.photos/600/400?random=1',
    likes: 42,
    createdAt: new Date().toISOString(),
  },
  {
    id: uuid(),
    username: 'you',
    content: 'Testing this new social mix app 🚀',
    image: null,
    likes: 5,
    createdAt: new Date().toISOString(),
  },
];

export function getPosts() {
  return [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function createPost({ username, content, image }) {
  const post = {
    id: uuid(),
    username: username || 'anon',
    content,
    image: image || null,
    likes: 0,
    createdAt: new Date().toISOString(),
  };
  posts.unshift(post);
  return post;
}

export function likePost(id) {
  const post = posts.find(p => p.id === id);
  if (post) post.likes += 1;
  return post;
}