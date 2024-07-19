import React, { FC } from "react";
import { useRouter } from "next/router";

const PostDetail: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <div>{slug}</div>;
};

export default PostDetail;
