import { likePost } from '../../../../lib/store';

export async function POST(req, { params }) {
  const post = likePost(params.id);
  if (!post) return Response.json({ error: 'Not found' }, { status: 404 });
  return Response.json(post);
}