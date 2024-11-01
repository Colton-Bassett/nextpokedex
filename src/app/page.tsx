import { Flex } from "@radix-ui/themes";
import GetPokemonButton from "./components/getPokemonButton";
import Pokemon, { PokemonList } from "./components/pokemon";
import Link from "next/link";

export default async function Home() {
	// const { rows } =
	// 	await sql`SELECT * FROM pokedex_pokemon ORDER BY RANDOM() LIMIT 12`;
	// console.log(rows);

	// const fetchPokemon = async () => {
	// 	const data = await getAllPokemonFromDB();
	// 	if (data) {
	// 		console.log(data);
	// 	} else {
	// 		console.error("Failed to fetch Pokémon:");
	// 	}
	// };

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

	return (
		<div className="flex items-center justify-items-center min-h-screen p-8 pb-20 min-w-full">
			<main className="flex flex-col items-center max-w-5xl w-full m-auto px-7">
				<Flex direction="column" gap="2">
					<PokemonList>
						{rows.map((p) => (
							<Link key={p.id} href={`/pokemon/${p.id}`}>
								<Pokemon
									id={p.id}
									name={p.name}
									type={p.type}
								/>
							</Link>
						))}
					</PokemonList>
					<GetPokemonButton />
				</Flex>
			</main>
		</div>
	);
}
