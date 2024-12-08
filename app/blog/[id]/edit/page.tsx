import { getPostsById } from "@/services/getPosts";
import { Metadata } from "next";
import { updatePost } from "../../actions";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostsById(id);

  return {
    title: `Profile of: ${post.title}`,
  };
}

export default async function EditProfile({ params }: Props) {
  const { id } = await params;
  const post = await getPostsById(id);

  return (
    <div>
      <h2>
        Profile of: <i>{post.title}</i>
      </h2>
      <Link href={`/blog/${post.id}`}>Back to post</Link>
      <br />
      <br />

      <form className="form" action={updatePost}>
        <input
          type="text"
          placeholder="title"
          required
          name="title"
          defaultValue={post.title}
        />
        <textarea
          placeholder="content"
          required
          name="body"
          defaultValue={post.body}
          rows={5}
          cols={5}
        />
        <input type="hidden" name="id" value={post.id} />
        <div>
          <input type="submit" value="Update post" />
        </div>
      </form>
    </div>
  );
}

// import { getPostsById } from "@/services/getPosts";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// const BASE_URL = "https://673dfa890118dbfe8609a017.mockapi.io";
// type Props = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// async function updatePost(data: FormData) {
//   "use server";

//   const { title, body, id } = Object.fromEntries(data);

//   const response = await fetch(`${BASE_URL}/posts/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title, body }),
//   });

//   const post = await response.json();

//   revalidatePath(`/blog/${post.id}`);
//   redirect(`/blog/${post.id}`);
// }

// export default async function Profile(props: Props) {
//   const params = await props.params;

//   const { id } = params;

//   const post = await getPostsById(id);

//   return (
//     <div>
//       <h1>Profile of {post.title}</h1>

//       <form className="form" action={updatePost}>
//         <input
//           type="text"
//           placeholder="title"
//           required
//           name="title"
//           defaultValue={post.title}
//         />
//         <textarea
//           placeholder="content"
//           required
//           name="body"
//           defaultValue={post.body}
//         />
//         <input type="hidden" name="id" value={post.id} />
//         <div>
//           <input type="submit" value="Update post" />
//         </div>
//       </form>
//     </div>
//   );
// }
