"use server";
import { sql } from "@vercel/postgres";

interface Pokemon {
	id: number;
	name: string;
	type: string;
}

// DB
export async function deleteAllPokemon() {
	await sql`DELETE FROM pokedex_pokemon;`;
}

export async function addPokemonToDB(pokemonList: Pokemon[]) {
	try {
		if (pokemonList.length === 0) {
			return { success: true }; // No pokemon to insert
		}

		// Build the PARAMETERIZED query string
		const values = pokemonList
			.map((_, i) => {
				const offset = i * 3;
				return `($${offset + 1}, $${offset + 2}, $${offset + 3})`;
			})
			.join(", ");

		// Create the complete query string
		const queryString = `INSERT INTO pokedex_pokemon (id, name, type) VALUES ${values}`;

		// Flatten all values into a single array
		const parameters = pokemonList.flatMap((pokemon) => [
			pokemon.id,
			pokemon.name,
			pokemon.type,
		]);

		// Execute the query using the raw template literal
		await sql.query(queryString, parameters);

		return { success: true };
	} catch (error) {
		console.error("Error inserting Pokémon into database:", error);
		return { error };
	}
}

export async function fetchAndAddPokemon() {
	const pokemon = await getAllPokemon();
	// console.log(pokemon);
	if (pokemon) {
		addPokemonToDB(pokemon);
	}
}

// API
export async function getAllPokemon() {
	const pokemonList: Pokemon[] = [];

	try {
		for (let id = 1; id <= 2; id++) {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${id}/`
			);
			const data = await response.json();

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

// HELPERS
function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
