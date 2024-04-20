import { ENV_VARS } from "@/env/env";

const { API_URL } = ENV_VARS;

type fetcherOptions = {
  tags?: string[];
  revalidate?: number | false;
  cache?: RequestCache;
};

export type getUsersApiResponse = {
  id: string;
  createdAt: string;
  name: string;
  image: string;
  random: string;
};

type getCatApiResponse = {
  id: string;
  url: string;
};

export async function getRandomCat({
  tags,
  revalidate,
  cache,
}: fetcherOptions): Promise<getCatApiResponse> {
  try {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?api_key=live_BM1Do8ZW5td6d9q4jGl2lc5XuAICn9CZtOzWS9WG11LbjLUL4lpDB1cuGZgJOxXZ",
      {
        next: {
          tags,
          revalidate,
        },

        cache,
      }
    );

    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();

    return data[0];
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
}

export async function getUsers({
  tags,
  cache,
  revalidate,
}: fetcherOptions): Promise<getUsersApiResponse[]> {
  try {
    const res = await fetch(`${API_URL}/users`, {
      next: {
        tags,
      },
      cache,
    });
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
}

export async function addUser({ name }: { name: string }) {
  try {
    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
}

export async function deleteUser({ id }: { id: string }) {
  try {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  }
}
