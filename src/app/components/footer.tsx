import Link from "next/link";
import Image from "next/image";
import { Flex, Text } from "@radix-ui/themes";

export default function Footer() {
  return (
    <footer className="flex overflow-auto whitespace-nowrap border-t">
      <Flex className="m-auto h-32 w-full max-w-4xl px-7" align="center">
        <Flex gap="7" className="min-w-[470px] items-center">
          <Link href="/" className="flex gap-3 text-2xl">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={90}
              height={19}
              priority
            />
            <Text className="">Pokedex</Text>
          </Link>
          <Link
            href="/help"
            className="text-stone-500 transition-colors duration-200 hover:text-stone-900"
          >
            <Text className="">Help</Text>
          </Link>
          <Link
            href="/disclaimer"
            className="text-stone-500 transition-colors duration-200 hover:text-stone-900"
          >
            <Text className="">Disclaimer</Text>
          </Link>
        </Flex>
      </Flex>
    </footer>
  );
}
