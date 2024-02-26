import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../../lib/api";

export default async function Post({ params }: any) {
  const posts = getAllPosts(); // deduped.
  const { postId } = params;

  if (!posts.find((post: any) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostBySlug(postId);

  //   const formattedDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{date}</p>
      <article>
        <section>{contentHtml}</section>
        <p>
          <Link href="/">홈으로 가기</Link>
        </p>
      </article>
    </main>
  );
}
