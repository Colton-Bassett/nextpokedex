import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// http://localhost:3000/api/addpokemon?id=1&name=Bulbasaur&type=GrassPoison

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const pokemonId = searchParams.get("id");
	const pokemonName = searchParams.get("name");
	const pokemonType = searchParams.get("type");

	try {
		if (!pokemonId || !pokemonName || !pokemonType)
			throw new Error("Pet and owner names required");
		await sql`INSERT INTO pokedex_pokemon (id, name, type) VALUES (${pokemonId}, ${pokemonName}, ${pokemonType});`;
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}

	const pokemon = await sql`SELECT * FROM pokedex_pokemon;`;
	return NextResponse.json({ pokemon }, { status: 200 });
}
