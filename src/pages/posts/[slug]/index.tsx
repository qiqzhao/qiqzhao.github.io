import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../../../app/globals.css";
import Link from "next/link";
import axios from "axios";
import { IPost } from "@/type/post";

import PostTitle from "@/components/post/title";
import PostAuthor from "@/components/post/author";
import CustomMarkdown from "@/components/post/custom-markdown";
import Header from "@/components/common/header";

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

  return (
    <div className="mx-auto px-5 mt-16 lg:px-48">
      <div className="flex flex-col mb-10">
        <Header />
        <PostTitle title={post?.title}></PostTitle>
        <PostAuthor author={post?.author?.name} date={post?.date}></PostAuthor>
        <CustomMarkdown content={post?.content} />
      </div>
    </div>
  );
};

export default PostDetail;
