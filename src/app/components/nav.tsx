import Link from "next/link";
import Image from "next/image";
import { Flex, Text } from "@radix-ui/themes";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 bg-white bg-opacity-80"
      style={{ backdropFilter: "saturate(180%) blur(5px)" }}
    >
      <Flex gap="3" className="h-16 items-center border-b px-7">
        <Link href="/" className="flex gap-3 text-2xl">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={90}
            height={19}
            priority
          />
          <Text className="">Pokedex</Text>
        </Link>
      </Flex>
    </nav>
  );
}
