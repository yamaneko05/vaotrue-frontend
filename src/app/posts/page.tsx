import { BACKEND_URL } from "@/constants";
import { prettyDate } from "@/lib/utils";
import Link from "next/link";

async function getPosts() {
  return fetch("http://localhost:1337/api/posts?populate=*")
  .then(res => res.json())
  .then(json => json.data);
}

export default async function Page() {
  const posts = await getPosts()

  return (
    <div className="p-4 w-full max-w-[720px] mx-auto">
      <div className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">記事一覧</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {posts.map((post: any) => (
          <div className="col-span-1" key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div className="sm:text-xl font-bold">{post.attributes.title}</div>
              <div className="text-xs sm:text-sm mb-2">{prettyDate(post.attributes.createdAt)}</div>
              <img
                src={BACKEND_URL+post.attributes.eyecatch.data.attributes.url}
                alt=""
                className="rounded-2xl border shadow-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
