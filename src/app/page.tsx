import Image from "next/image";
import { getAllPosts } from "../../lib/api";
import Intro from "@/components/intro";
import Post from "@/components/post";

export default function Home() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  console.log("aaaa", allPosts);
  return (
    <>
      <Intro />
      {allPosts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </>
  );
}
