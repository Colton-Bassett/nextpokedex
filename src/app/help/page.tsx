import { Flex, Text } from "@radix-ui/themes";

export default function HelpPage() {
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
            Help Page
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
            The goal of this website is to quickly fetch and display 12 random
            Pokémon from a pool of 151 Generation One Pokémon stored in a
            PostgreSQL database. Users can refresh the list by clicking the
            Fetch button on the Home Page. Additionally, clicking on any Pokémon
            will navigate to a detail page with a unique URL for each Pokémon.
          </Text>
          <Text className="mb-8">
            Built with modern Next.js architecture, the initial Pokémon data is
            fetched server-side and statically served to the client for fast
            load times. Subsequent requests are dynamically served, ensuring
            fast database queries and a seamless user experience.
          </Text>
          <Text className="mb-8">
            An admin page is also available, which requires basic
            authentication. This page allows for managing Pokémon data,
            including adding, saving, and deleting entries via raw SQL queries.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
