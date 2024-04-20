import Image from "next/image";

import Container from "@/components/container";

import { randomNumber } from "@/utils/utils";
import { getRandomCat } from "@/utils/fetchers";

export default async function Random() {
  const cat = await getRandomCat({
    tags: ["randomCat"],
    cache: "no-store",
  });

  const cat2 = await getRandomCat({ tags: ["randomCat2"] });

  return (
    <main>
      <Container type="server">
        <div className="flex gap-2 mb-2">
          <p className="text-sm">{randomNumber()}</p>
          <p className="text-sm">{new Date().toISOString()}</p>
        </div>

        {/* <p className="small mb-2 text-green-500">Cached</p> */}
        <p className="small mb-2 text-red-500">No cached</p>

        <div className="flex gap-2">
          <Image
            src={cat.url}
            alt="Random cat"
            height={200}
            width={200}
            className="aspect-square rounded w-[100px] h-[100px]"
          />

          <Image
            src={cat2.url}
            alt="Random cat"
            height={200}
            width={200}
            className="aspect-square rounded w-[100px] h-[100px]"
          />
        </div>
      </Container>
    </main>
  );
}
