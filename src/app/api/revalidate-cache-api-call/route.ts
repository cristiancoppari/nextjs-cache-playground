import { revalidateTag } from "next/cache";
export async function GET() {
  revalidateTag("notCachedCat");
  return Response.json("getRandomCat cache purged", { status: 200 });
}
