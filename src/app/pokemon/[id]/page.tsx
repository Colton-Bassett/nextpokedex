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
		<div className="flex items-center justify-items-center min-h-screen p-8 pb-20 min-w-full">
			<div className="flex flex-col items-center max-w-5xl w-full m-auto px-7">
				<Flex direction="column" gap="2">
					<Text>Pokemon Page</Text>
					<Pokemon
						id={pokemon.id}
						name={pokemon.name}
						type={pokemon.type}
					/>
				</Flex>
			</div>
		</div>
	);
}
