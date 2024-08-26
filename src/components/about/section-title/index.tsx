import React, { FC } from "react";

interface IProps {
  children?: any;
}

const SectionTitle: FC<IProps> = ({ children }) => {
  return <h4 className="text-black font-bold">{children}</h4>;
};

export default SectionTitle;
