import Pokemon from "@/app/components/pokemon";
import { Flex, Text } from "@radix-ui/themes";
import { sql } from "@vercel/postgres";

export default async function PokemonPage({
	params,
}: {
	params: { id: number };
}) {
	const pokemonParams = await params;
	const pokemon =
		await sql`SELECT * FROM pokedex_pokemon WHERE id = ${pokemonParams.id}`;

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Flex direction="column" gap="2">
					<Text>Pokemon Page</Text>
					<Pokemon
						id={pokemon.rows[0].id}
						name={pokemon.rows[0].name}
						type={pokemon.rows[0].type}
					/>
				</Flex>
			</div>
		</div>
	);
}
