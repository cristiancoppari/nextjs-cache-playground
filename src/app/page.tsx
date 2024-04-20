import Link from "next/link";
import Container from "@/components/container";

export default function Home() {
  return (
    <main>
      <Container type="server">
        <ul className="mt-4">
          <li className="list-disc list-inside flex flex-col gap-2">
            <Link href="/nested" className="underline">
              Go to nested page
            </Link>
          </li>
        </ul>
      </Container>
    </main>
  );
}
