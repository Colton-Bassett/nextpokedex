import { NextRequest } from "next/server";
import { isValidPassword } from "./isValidPassword";
import { headers } from "next/headers";

// formatting pokemon name and types from fetchPokemonFromAPI()
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// for debugging
export async function mockSlowRequest() {
  return new Promise((resolve) => {
    // Simulate a delay of 2 seconds (2000 milliseconds)
    setTimeout(() => {
      resolve("Data retrieved after a slow request!");
      console.log("Finished slow request!");
    }, 2000);
  });
}

// for middleware
export async function isAuthenticated(req: NextRequest) {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization");

  if (authHeader == null) return false;

  // Basic username:password
  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  return (
    username === process.env.ADMIN_USERNAME &&
    (await isValidPassword(
      password,
      process.env.HASHED_ADMIN_PASSWORD as string,
    ))
  );
}

// for server actions
export async function isAuthenticatedAction() {
  const headersList = await headers();
  const authHeader =
    headersList.get("authorization") || headersList.get("Authorization");

  if (authHeader == null) return false;

  // Basic username:password
  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  return (
    username === process.env.ADMIN_USERNAME &&
    (await isValidPassword(
      password,
      process.env.HASHED_ADMIN_PASSWORD as string,
    ))
  );
}

// pokemon.tsx data processing/formatting
export function separatePokemonTypes(type: string): string[] {
  // List of all valid Pokémon types
  const validTypes = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  // Find both types if they exist
  const types = validTypes.filter((validType) => type.includes(validType));

  return types;
}

export function getPokemonTypeColor(type: string): string {
  const typeColorMap: { [key: string]: string } = {
    Normal: "bg-gray-300",
    Fire: "bg-red-300",
    Water: "bg-blue-300",
    Electric: "bg-yellow-200",
    Grass: "bg-green-300",
    Ice: "bg-cyan-100",
    Fighting: "bg-rose-400",
    Poison: "bg-purple-300",
    Ground: "bg-orange-300",
    Flying: "bg-indigo-100",
    Psychic: "bg-fuchsia-300",
    Bug: "bg-lime-300",
    Rock: "bg-stone-400",
    Ghost: "bg-purple-400",
    Dragon: "bg-indigo-300",
    Dark: "bg-gray-400",
    Steel: "bg-slate-300",
    Fairy: "bg-pink-200",
  };

  return typeColorMap[type] || "bg-gray-200"; // Returns a default color if type not found
}

export function getPokemonTypeTextColor(type: string): string {
  const typeColorMap: { [key: string]: string } = {
    Normal: "text-gray-900",
    Fire: "text-red-900",
    Water: "text-blue-900",
    Electric: "text-yellow-900",
    Grass: "text-green-900",
    Ice: "text-cyan-900",
    Fighting: "text-rose-900",
    Poison: "text-purple-900",
    Ground: "text-orange-900",
    Flying: "text-indigo-900",
    Psychic: "text-fuchsia-900",
    Bug: "text-lime-900",
    Rock: "text-stone-900",
    Ghost: "text-purple-900",
    Dragon: "text-indigo-900",
    Dark: "text-gray-900",
    Steel: "text-slate-900",
    Fairy: "text-pink-900",
  };

  return typeColorMap[type] || "text-gray-900";
}
