const BASE_URL = "https://673dfa890118dbfe8609a017.mockapi.io";

export async function getAllPosts() {
  const response = await fetch(`${BASE_URL}/posts`);

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
}

export const getPostsById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
