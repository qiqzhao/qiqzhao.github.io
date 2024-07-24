import { getAllPosts } from "../../lib/api";
import Intro from "@/components/intro";
import Post from "@/components/home";
import { IPost } from "@/type/post";

export default function Home() {
  const allPosts: IPost[] = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return (
    <>
      <Intro />
      {allPosts.map(({ title, date, slug, author }, index) => (
        <Post
          key={index}
          title={title}
          date={date}
          slug={slug}
          author={author}
        />
      ))}
    </>
  );
}
