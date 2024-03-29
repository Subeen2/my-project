import { BlogPost } from "@/types/BlogPost";
import { getAllPosts } from "../../../lib/api";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getAllPosts();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
