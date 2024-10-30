"use client";

import { Button } from "@radix-ui/themes";
import { fetchAndAddPokemon, deleteAllPokemon } from "../actions/actions";

export default function GetPokemonButton() {
	return (
		<Button
			color="gray"
			variant="solid"
			highContrast
			onClick={() => fetchAndAddPokemon()}
		>
			Fetch
		</Button>
	);
}
