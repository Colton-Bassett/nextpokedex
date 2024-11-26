import Link from "next/link";
import Image from "next/image";
import { Button, Flex, Text } from "@radix-ui/themes";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 bg-white bg-opacity-80"
      style={{ backdropFilter: "saturate(180%) blur(5px)" }}
    >
      <Flex gap="3" className="h-16 items-center justify-between border-b px-7">
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
        {/* <Link href="/" className="flex gap-3 text-2xl">
          <Image
            width={20}
            height={20}
            src="/github.svg"
            alt="Github logo"
            priority
          />
        </Link> */}
        <Flex gap="4" className="hidden sm:flex">
          <Link href="/admin" prefetch={false}>
            <Button
              color="gray"
              variant="outline"
              highContrast
              className="[box-shadow:0_0_0_1px_rgba(0,0,0,0.08)]"
            >
              <span>
                <svg
                  aria-label="Vercel logomark"
                  height="13"
                  role="img"
                  viewBox="0 0 74 64"
                >
                  <path
                    d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                    fill="171717"
                  ></path>
                </svg>
              </span>
              Admin
            </Button>
          </Link>
          <Link
            href="https://github.com/Colton-Bassett"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="gray" variant="solid" highContrast className="">
              Github
            </Button>
          </Link>
        </Flex>
      </Flex>
    </nav>
  );
}
