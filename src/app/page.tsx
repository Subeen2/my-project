import Posts from "@/containers/blog/Posts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        안녕하세요. 👋&nbsp;
        <span className="whitespace-nowrap">
          <span className="font-bold">Subeen</span>의 블로그입니다.
        </span>
      </p>
      <Posts />
    </main>
  );
}
