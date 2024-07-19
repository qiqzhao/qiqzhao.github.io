import React, { FC } from "react";
import { useRouter } from "next/router";
import "../../../app/globals.css";
import Link from "next/link";

const PostDetail: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="mx-auto px-5 mt-16 lg:px-48">
      <div className="flex flex-col mb-10">
        <h3 className="text-2xl font-bold mb-10">
          <Link href="/" className="hover:underline">
            My Blog.
          </Link>
        </h3>
        <h1 className="text-4xl mb-5">{slug}</h1>
        <div className="mb-8">
          <div>qiqzhao</div>
          <div className="text-xs text-gray-500">qiqzhao</div>
        </div>
        <div>test</div>
      </div>
    </div>
  );
};

export default PostDetail;
