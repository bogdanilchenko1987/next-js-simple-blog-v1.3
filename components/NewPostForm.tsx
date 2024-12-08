const BASE_URL = "https://673dfa890118dbfe8609a017.mockapi.io";

export default function NewPostForm({
  onSuccess,
}: {
  onSuccess: (id?: number) => Promise<void>;
}) {
  async function createPost(data: FormData) {
    "use server";
    const { title, body } = Object.fromEntries(data);

    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, body }),
    });

    const post = await response.json();

    await onSuccess(post.id);
  }

  return (
    <form className="form" action={createPost}>
      <input type="text" placeholder="title" required name="title" />
      <textarea
        placeholder="content"
        required
        name="body"
        className="edit-text"
      />
      <div>
        <input type="submit" value="Add post" />
      </div>
    </form>
  );
}
