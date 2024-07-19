import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../../../app/globals.css";
import Link from "next/link";
import axios from "axios";
import { IPost } from "@/type/post";
import markdownStyles from "../../../components/markdown-style.module.css";

const PostDetail: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<IPost>();

  const fetchPost = async () => {
    const { data } = await axios.get(`/api/posts`);
    console.log("ppp", post);
    setPost(data);
  };
  useEffect(() => {
    if (slug) {
      fetchPost();
    }
    console.log(post);
  }, [slug]);

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
        <div>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: post?.content || "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
