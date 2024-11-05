import { Card, Flex, Text, Grid } from "@radix-ui/themes";
import Image from "next/image";

export default function Pokemon({
  id,
  name,
  type,
}: {
  id: number;
  name: string;
  type: string;
}) {
  const typeA = separatePokemonTypes(type)[0];
  const typeB = separatePokemonTypes(type)[1];

  return (
    <Card
      key={id}
      className="min-w-44 bg-transparent transition-shadow duration-200 ease-in-out hover:bg-white hover:shadow-[0_0_0_0.25px_rgba(1,1,1,1)]"
    >
      <Flex direction="column" align="center">
        <Image
          className="dark:invert"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={`${name} sprite`}
          width={128}
          height={128}
          priority
        />
        <Text className="mb-2">{name}</Text>
        <Flex gap="2">
          {typeA ? (
            <Flex
              className={`${getPokemonTypeColor(typeA)} min-w-14 rounded-xl px-2`}
              align="center"
              justify="center"
            >
              <Text
                className={`${getPokemonTypeTextColor(typeA)} text-sm font-light`}
              >
                {typeA}
              </Text>
            </Flex>
          ) : (
            <></>
          )}

          {typeB ? (
            <Flex
              className={`${getPokemonTypeColor(typeB)} min-w-14 rounded-xl px-2`}
              align="center"
              justify="center"
            >
              <Text
                className={`${getPokemonTypeTextColor(typeB)} text-sm font-light`}
              >
                {typeB}
              </Text>
            </Flex>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
    </Card>
  );
}

export function PokemonList({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid
      columns={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      gap="8"
      rows="3"
      width="auto"
    >
      {children}
    </Grid>
  );
}

function separatePokemonTypes(type: string): string[] {
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

function getPokemonTypeColor(type: string): string {
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

function getPokemonTypeTextColor(type: string): string {
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
