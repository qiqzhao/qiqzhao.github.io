import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  title: string;
  date: string;
  slug: string;
  author: {
    name: string;
  };
}

const Post: FC<IProps> = ({ title, date, author }) => {
  return (
    <div>
      <h3>
        <Link as={""} href={""}>
          {title}
        </Link>
      </h3>
      <div>{date}</div>
    </div>
  );
};

export default Post;
