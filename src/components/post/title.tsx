import React, { FC } from "react";

interface IProps {
  title?: string;
}

const PostTitle: FC<IProps> = ({ title }: IProps) => {
  return <h1 className="text-4xl mb-5">{title}</h1>;
};

export default PostTitle;
