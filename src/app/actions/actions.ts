"use server";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

interface Pokemon {
	id: number;
	name: string;
	type: string;
}

// export async function addPokemonToDB() {
// 	const pokemonId = 2;
// 	const pokemonName = "Ivysaur";
// 	const pokemonType = "GrassPoison";

// 	try {
// 		if (!pokemonId || !pokemonName || !pokemonType)
// 			throw new Error("Pet and owner names required");
// 		await sql`INSERT INTO pokedex_pokemon (id, name, type) VALUES (${pokemonId}, ${pokemonName}, ${pokemonType});`;
// 	} catch (error) {
// 		return NextResponse.json({ error }, { status: 500 });
// 	}
// }
export async function addPokemonToDB(pokemonList: Pokemon[]) {
	try {
		// Constructing the bulk insert query
		const values = pokemonList
			.map(
				(pokemon) => `(${pokemon.id}, ${pokemon.name}, ${pokemon.type})`
			)
			.join(", ");

		console.log(values);
		// const query = `
		//     INSERT INTO pokedex_pokemon (id, name, type) VALUES ${values};
		// `;

		// await sql`${query}`;
	} catch (error) {
		console.error("Error inserting Pokémon into database:", error);
		return { error };
	}
}

export async function getAllPokemon() {
	const pokemonList: Pokemon[] = [];

	try {
		for (let id = 1; id <= 2; id++) {
			let response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${id}/`
			);
			let data = await response.json();

			const pokemon: Pokemon = {
				id: data.id,
				name: capitalizeFirstLetter(data.name),
				type:
					data.types.length > 1
						? `${capitalizeFirstLetter(data.types[0].type.name) + capitalizeFirstLetter(data.types[1].type.name)}`
						: capitalizeFirstLetter(data.types[0].type.name),
			};

			pokemonList.push(pokemon);
		}
		return pokemonList;
	} catch (error) {
		console.error("Error fetching Pokémon names:", error);
	}
}

export async function fetchAndAddPokemon() {
	const pokemon = await getAllPokemon();
	console.log(pokemon);
}

function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
