import { getPostsById } from "@/services/getPosts";
import { Metadata } from "next";
import Link from "next/link";
import { deletePost } from "../actions";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostsById(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const post = await getPostsById(id);

  return (
    <>
      <Link href={`/blog`}>Back to blog</Link>
      <br />
      <br />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <form action={deletePost.bind(null, id)}>
        <input type="submit" value="Delete post" />
      </form>
      <b>
        <Link href={`/blog/${post.id}/edit`}>Edit post</Link>
      </b>
    </>
  );
}

// import { getPostsById } from "@/services/getPosts";
// import { Metadata } from "next";
// import { revalidatePath } from "next/cache";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// const BASE_URL = "https://673dfa890118dbfe8609a017.mockapi.io";

// type Props = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// export async function generateMetadata(props: Props): Promise<Metadata> {
//   const params = await props.params;

//   const { id } = params;

//   const post = await getPostsById(id);

//   return {
//     title: post.title,
//   };
// }

// async function removePost(id: string) {
//   "use server";
//   await fetch(`${BASE_URL}/posts/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   revalidatePath("/blog");
//   redirect("/blog");
// }

// export default async function Post(props: Props) {
//   const params = await props.params;

//   const { id } = params;

//   const post = await getPostsById(id);

//   return (
//     <>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>

//       <form action={removePost.bind(null, id)}>
//         <input type="submit" value="delete post" />
//       </form>

//       <Link href={`/blog/${id}/edit`}>Edit</Link>
//     </>
//   );
// }
