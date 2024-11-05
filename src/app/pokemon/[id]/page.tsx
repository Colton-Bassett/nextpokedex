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
    <div className="flex min-h-screen min-w-full items-center justify-items-center p-8 pb-20">
      <div className="m-auto flex w-full max-w-5xl flex-col items-center px-7">
        <Flex
          direction="column"
          gap="2"
          align="center"
          justify="center"
          className="items-center"
        >
          <Text>Pokemon Page</Text>
          <Pokemon id={pokemon.id} name={pokemon.name} type={pokemon.type} />
        </Flex>
      </div>
    </div>
  );
}
