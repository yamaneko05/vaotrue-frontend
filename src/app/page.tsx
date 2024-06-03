import Markdown from "react-markdown";

async function getPosts() {
  return fetch("http://localhost:1337/api/posts?")
  .then(res => res.json())
  .then(json => json.data);
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="container">
      {posts.map((post: any) => (
        <div className="" key={post.id}>
          <dl>
            <dt>title</dt>
            <dd>{post.attributes.title}</dd>
            <dt>content</dt>
            <dd>
              <div className="prose">
                <Markdown>{post.attributes.content}</Markdown>
              </div>
            </dd>
          </dl>
        </div>
      ))}
    </div>
  );
}
