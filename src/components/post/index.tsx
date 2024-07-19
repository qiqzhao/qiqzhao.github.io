import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  key: number;
  title: string;
  date: string;
  slug: string;
  author: {
    name: string;
  };
}

const Post: FC<IProps> = ({ title, date, author, slug }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg mb-1">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </h3>
      <div className="text-xs text-gray-500">{date}</div>
    </div>
  );
};

export default Post;
