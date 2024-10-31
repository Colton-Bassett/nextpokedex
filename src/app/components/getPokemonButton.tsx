"use client";

import { Button } from "@radix-ui/themes";
import { getAllPokemonFromDB } from "../actions/actions";
import { useTransition } from "react";

export default function GetPokemonButton() {
	const [isPending, startTransition] = useTransition();

	const fetchPokemon = async () => {
		const data = await getAllPokemonFromDB();
		if (data) {
			console.log(data);
		} else {
			console.error("Failed to fetch Pokémon:");
		}
	};

	return (
		<Button
			color="gray"
			variant="solid"
			highContrast
			disabled={isPending}
			onClick={() => {
				startTransition(fetchPokemon);
			}}
		>
			{isPending ? "Fetching..." : "Fetch"}
		</Button>
	);
}
