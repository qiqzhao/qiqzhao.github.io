import React, { FC } from "react";

interface IProps {
  author?: string;
  date?: string;
}

const PostAuthor: FC<IProps> = ({ author, date }: IProps) => {
  return (
    <div className="mb-8">
      <div>{author}</div>
      <div className="text-xs text-gray-500">{date}</div>
    </div>
  );
};

export default PostAuthor;
