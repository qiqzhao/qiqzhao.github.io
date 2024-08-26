import React, { FC } from "react";

interface IProps {
  children?: any;
}

const Li: FC<IProps> = ({ children }) => {
  return <li className="text-sm leading-8">{children}</li>;
};

export default Li;
