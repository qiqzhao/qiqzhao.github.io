import { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from "../../../../lib/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { slug } = req.query;
    const post = await getPost(slug as string);
    res.status(200).json(post);
  }
}

async function getPost(slug: string) {
  return getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
}
