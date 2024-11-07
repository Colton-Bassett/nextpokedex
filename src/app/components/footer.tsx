import Link from "next/link";
import Image from "next/image";
import { Flex } from "@radix-ui/themes";

export default function Footer() {
  return (
    <footer className="flex overflow-auto whitespace-nowrap border-t">
      <Flex className="m-auto h-32 w-full max-w-4xl px-7" align="center">
        <Flex gap="7" className="min-w-[470px] items-center">
          <Link href="/" className="flex gap-3 text-2xl">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={90}
              height={19}
              priority
            />
            <span className="">Pokedex</span>
          </Link>
          <Link
            href="/help"
            className="text-stone-500 transition-colors duration-200 hover:text-stone-900"
          >
            <span className="">Help</span>
          </Link>
          <Link
            href="/disclaimer"
            className="text-stone-500 transition-colors duration-200 hover:text-stone-900"
          >
            <span className="">Disclaimer</span>
          </Link>
        </Flex>
      </Flex>
    </footer>
  );
}
