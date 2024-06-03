import { prettyDate } from "@/lib/utils";
import Markdown from "react-markdown";

async function getPost(id: string) {
  return fetch(`http://localhost:1337/api/posts/${id}?populate=*`)
  .then(res => res.json())
  .then(json => json.data);
}

export default async function Page({ params }: {
  params: { id: string }
}) {
  const post = await getPost(params.id)

  return (
    <div className="p-4 w-full max-w-[720px] mx-auto">
      <div className="text-2xl font-bold mb-2">{post.attributes.title}</div>
      <div className="mb-2">{prettyDate(post.attributes.createdAt)}</div>
      <img
        src={`http://localhost:1337`+post.attributes.eyecatch.data.attributes.url}
        alt=""
        className="rounded-3xl border shadow-lg mb-6"
      />
      <div className="prose">
        <Markdown>{post.attributes.content}</Markdown>
      </div>
    </div>
  );
}
