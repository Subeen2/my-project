import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../../lib/api";

export default async function Post({ params }: any) {
  const posts = getAllPosts(); // deduped.
  const { postId } = params;

  if (!posts.find((post: any) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostBySlug(postId);
  // ... 생략
}
