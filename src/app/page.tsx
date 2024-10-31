import { Card, Flex, Grid, Text } from "@radix-ui/themes";
import GetPokemonButton from "./components/getPokemonButton";
import { mockSlowRequest } from "./actions/actions";
import { sql } from "@vercel/postgres";
import Image from "next/image";

export default async function Home() {
	// const { rows } =
	// 	await sql`SELECT * FROM pokedex_pokemon ORDER BY RANDOM() LIMIT 12`;
	// console.log(rows);

	const rows = [
		{ id: 55, name: "Golduck", type: "Water" },
		{ id: 150, name: "Mewtwo", type: "Psychic" },
		{ id: 134, name: "Vaporeon", type: "Water" },
		{ id: 110, name: "Weezing", type: "Poison" },
		{ id: 40, name: "Wigglytuff", type: "NormalFairy" },
		{ id: 44, name: "Gloom", type: "GrassPoison" },
		{ id: 108, name: "Lickitung", type: "Normal" },
		{ id: 86, name: "Seel", type: "Water" },
		{ id: 133, name: "Eevee", type: "Normal" },
		{ id: 137, name: "Porygon", type: "Normal" },
		{ id: 91, name: "Cloyster", type: "WaterIce" },
		{ id: 45, name: "Vileplume", type: "GrassPoison" },
	];

	// const fetchPokemon = async () => {
	// 	const data = await getAllPokemonFromDB();
	// 	if (data) {
	// 		console.log(data);
	// 	} else {
	// 		console.error("Failed to fetch Pokémon:");
	// 	}
	// };

	return (
		<div className="flex items-center justify-items-center min-h-screen p-8 pb-20 min-w-full">
			<main className="flex flex-col items-center max-w-5xl w-full m-auto px-7">
				<Flex direction="column" gap="2">
					<Grid columns="3" gap="3" rows="4" width="auto">
						{rows.map((p) => (
							<Card key={p.id}>
								<Flex direction="column" align="center">
									<Image
										className="dark:invert"
										src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
										alt={`${p.name} sprite`}
										width={90}
										height={19}
										priority
									/>
									<Text>{p.name}</Text>
									<Text>{p.type}</Text>
								</Flex>
							</Card>
						))}
					</Grid>
					<GetPokemonButton />
				</Flex>
			</main>
		</div>
	);
}
