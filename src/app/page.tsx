import { Flex, Text } from "@radix-ui/themes";
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
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Flex direction="column" gap="2">
					<ul>
						{rows.map((p) => (
							<div key={p.id}>
								<Image
									className="dark:invert"
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
									alt="Next.js logo"
									width={90}
									height={19}
									priority
								/>
								<li>{p.name}</li>
								<li>{p.type}</li>
							</div>
						))}
					</ul>
					<GetPokemonButton />
				</Flex>
			</main>
		</div>
	);
}
