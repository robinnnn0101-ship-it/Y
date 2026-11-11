import { getPosts, createPost } from '../../lib/store';

export async function GET() {
  return Response.json(getPosts());
}

export async function POST(req) {
  const body = await req.json();
  const post = createPost(body);
  return Response.json(post);
}