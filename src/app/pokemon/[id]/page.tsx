import Pokemon from "@/app/components/pokemon";
import { Flex, Text } from "@radix-ui/themes";
import { sql } from "@vercel/postgres";

export default async function PokemonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const pokemonId = (await params).id;
  const pokemon = (
    await sql`SELECT * FROM pokedex_pokemon WHERE id = ${pokemonId}`
  ).rows[0];

  return (
    <Flex
      direction="column"
      className="m-auto min-h-screen min-w-full bg-[linear-gradient(180deg,#fff_10%,#fafafa_30%,#fafafa_100%)] p-8 pb-20"
    >
      <Flex
        className="mx-auto w-full max-w-4xl"
        direction="column"
        align="center"
      >
        {/* <Text className="mb-8 text-xl text-gray-500">
          <Text className="mr-4 text-3xl font-bold text-gray-900">
            Pokemon Page
          </Text>
          Built on a foundation of fast, production-grade tooling.
        </Text> */}
        <Flex className="mb-8 flex-col items-center justify-center sm:flex-row">
          <Text className="text-center text-3xl font-bold text-gray-900 sm:mr-4">
            Pokemon Page
          </Text>
          <Text className="text-center text-xl text-gray-500">
            Built on a foundation of fast, production-grade tooling.
          </Text>
        </Flex>
        <Pokemon id={pokemon.id} name={pokemon.name} type={pokemon.type} />
      </Flex>
    </Flex>
  );
}
