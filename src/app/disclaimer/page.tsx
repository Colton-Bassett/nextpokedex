import { Flex, Text } from "@radix-ui/themes";

export default function DisclaimerPage() {
  return (
    <Flex
      direction="column"
      className="m-auto min-h-screen min-w-full bg-[linear-gradient(180deg,#fff_10%,#fafafa_30%,#fafafa_100%)] px-8 py-20"
    >
      <Flex
        className="mx-auto w-full max-w-4xl"
        direction="column"
        align="center"
      >
        <Flex
          className="min-w-full border border-gray-200 px-8 py-12 sm:px-12"
          align="center"
          justify="center"
        >
          <Text className="text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Disclaimer Page
          </Text>
        </Flex>
        <Flex
          className="min-w-full border border-t-0 border-gray-200 px-8 py-8 text-gray-600 sm:px-12"
          align="center"
          justify="center"
        >
          <Text className="text-center">Last updated November 7, 2024</Text>
        </Flex>
        <Flex
          className="min-w-full border border-t-0 border-gray-200 px-8 pb-20 pt-12 text-gray-600 sm:px-12"
          align="center"
          justify="center"
          direction="column"
        >
          <Text className="mb-8">
            This website is designed for educational and exploratory purposes,
            focusing on learning and experimenting with Next.js, Vercel
            products, React Server Components/Actions, and Radix UI. It serves
            as a personal project to demonstrate and explore these technologies
            in practice.
          </Text>
          <Text className="mb-8">
            This website is an unofficial fan-made project and is not affiliated
            with, endorsed by, or otherwise associated with The Pokémon Company,
            Nintendo, or Game Freak. All trademarks and copyrights related to
            Pokémon are the property of their respective owners. All rights
            reserved.
          </Text>
          <Text className="mb-8">
            This site is an independent web app and is not associated with,
            endorsed by, or connected to Next.js, Vercel, or any of their
            affiliates. All related trademarks and copyrights are owned by their
            respective entities. All rights reserved.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
