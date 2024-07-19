import { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { slug } = req.query;
    const post = await getPost('browser-render');
    res.status(200).json(post);
  }
}

export async function getPost(slug: string) {
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    ...post,
    content,
  };
}
