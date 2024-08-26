import React, { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <h3 className="text-2xl font-bold mb-10">
      <Link href="/" className="hover:underline">
        My Blog.
      </Link>
    </h3>
  );
};

export default Header;
