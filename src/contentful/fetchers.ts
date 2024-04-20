import { client } from "./client";

export async function getUser() {
  const entry = await client.getEntry("3tUMvdy1PmyoLXL0WMlqZh");
  return entry;
}
