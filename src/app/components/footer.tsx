import Link from "next/link";
import Image from "next/image";
import { Flex } from "@radix-ui/themes";

export default function Footer() {
  return (
    <footer className="border-t">
      <Flex gap="7" className="m-auto h-32 max-w-4xl items-center px-7">
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
          href="/"
          className="text-stone-500 transition-colors duration-200 hover:text-stone-900"
        >
          <span className="text-lg">Help</span>
        </Link>
        <Link
          href="/"
          className="text-stone-500 transition-colors duration-200 hover:text-stone-900"
        >
          <span className="text-lg">Disclaimer</span>
        </Link>
      </Flex>
    </footer>
  );
}
