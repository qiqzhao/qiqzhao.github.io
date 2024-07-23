import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../../../app/globals.css";
import Link from "next/link";
import axios from "axios";
import { IPost } from "@/type/post";
import "../../../components/markdown-style.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostDetail: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`/api/posts/${slug}`);
      setPost(data);
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const content = post?.content?.replace(/\.\.\/public/g, "") || "";

  const MarkdownComponents = {
    code: ({children, className}: any) => {
      return (
        <SyntaxHighlighter language={className?.slice(9)} style={nord}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <div className="mx-auto px-5 mt-16 lg:px-48">
      <div className="flex flex-col mb-10">
        <h3 className="text-2xl font-bold mb-10">
          <Link href="/" className="hover:underline">
            My Blog.
          </Link>
        </h3>
        <h1 className="text-4xl mb-5">{post?.title}</h1>
        <div className="mb-8">
          <div>{post?.author.name}</div>
          <div className="text-xs text-gray-500">{post?.date}</div>
        </div>
        <ReactMarkdown
          className="markdown"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={MarkdownComponents}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default PostDetail;
