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
    <div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </h3>
      <div>{date}</div>
    </div>
  );
};

export default Post;
