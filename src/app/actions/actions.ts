"use server";
import { capitalizeFirstLetter } from "@/lib/utils";
import { sql } from "@vercel/postgres";

interface Pokemon {
  id: number;
  name: string;
  type: string;
}

// DB

export async function deleteAllPokemonFromDB() {
  try {
    // check if authenticated
    const result = await sql`DELETE FROM pokedex_pokemon;`;
    console.log(
      `Delete: ${true}, deleted ${result.rowCount} rows from pokedex_pokemon`,
    );

    return { success: true, deletedCount: result.rowCount };
  } catch (error) {
    console.log("Error deleting all Pokemon", error);
    return { success: false };
  }
}

// saves a list of pokemon to db, called from fetchAndSavePokemonToDB()
export async function savePokemonToDB(pokemonList: Pokemon[]) {
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
    console.log(error);
    throw new Error(
      "savePokemonToDB() error. Possible duplicate Pokémon found in the database.",
    );
  }
}

// Shows all pokemon in db
export async function getAllPokemonFromDB() {
  try {
    const result = await sql`SELECT * FROM pokedex_pokemon`;
    const allPokemonList = result.rows;
    console.log(allPokemonList);

    return {
      success: true,
      allPokemonList: allPokemonList,
      pokemonCount: result.rowCount,
    };
  } catch (error) {
    console.error("Error fetching all pokemon from DB:", error);
    return { success: false, allPokemonList: [], pokemonCount: 0 };
  }
}

// Main function
export async function fetchAndSavePokemonToDB() {
  try {
    const pokemon = await fetchPokemonFromAPI();
    // console.log(pokemon);

    if (pokemon && pokemon.length > 0) {
      await savePokemonToDB(pokemon);
    }

    return { success: true, pokemonCount: pokemon?.length };
  } catch (error) {
    console.error("Error saving all pokemon to DB:", error);
    return { success: false, pokemonCount: 0 };
  }
}

// API

// Fetches all pokemon from pokeAPI
export async function fetchPokemonFromAPI() {
  const pokemonList: Pokemon[] = [];

  try {
    for (let id = 1; id <= 151; id++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
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
    console.log(error);
    throw new Error("fetchPokemonFromAPI() error. Possible PokeAPI issue.");
  }
}
