import { Flex, Text, Button } from "@radix-ui/themes";
import {
	addPokemonToDB,
	getAllPokemon,
	fetchAndAddPokemon,
} from "./actions/actions";
import GetPokemonButton from "./components/getPokemonButton";

export default async function Home() {
	// fetchAndAddPokemon();
	// addPokemon();

	// getAllPokemon();

	// https://pokeapi.co/api/v2/pokemon/${id}
	// "https://pokeapi.co/api/v2/pokemon?limit=2&offset=0"

	// let response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
	// let data = await response.json();
	// console.log(data.id);
	// console.log(data.name);
	// console.log(data.types[0].type.name);
	// console.log(data.types[1].type.name);

	// try {
	// 	for (let id = 1; id <= 3; id++) {
	// 		let response = await fetch(
	// 			`https://pokeapi.co/api/v2/pokemon/${id}/`
	// 		);
	// 		let data = await response.json();
	// 		console.log(data.id);
	// 		console.log(data.name);
	// 		console.log(data.types[0].type.name);
	// 		console.log(data.types[1].type.name);
	// 	}
	// } catch (error) {
	// 	console.error("Error fetching Pokémon names:", error);
	// }

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Flex direction="column" gap="2">
					<Text>Hello from Radix Themes</Text>
					{/* <Button color="gray" variant="solid" highContrast>
						Lets go
					</Button> */}
					<GetPokemonButton />
				</Flex>
			</main>
		</div>
	);
}
