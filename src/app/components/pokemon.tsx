import { Card, Flex, Text, Grid, Inset } from "@radix-ui/themes";
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
        <Flex className="relative">
          <Inset
            clip="padding-box"
            side="top"
            pb="current"
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="130"
              viewBox="0 0 212 130"
              width="212"
            >
              <defs>
                <linearGradient id="fadeGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="50%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="fadeMask">
                  <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                </mask>
              </defs>

              <g
                opacity="0.08"
                stroke="#000"
                strokeDasharray="1 1"
                mask="url(#fadeMask)"
              >
                <line x2="392" y1="15.5" y2="15.5"></line>
                <line x2="392" y1="31.5" y2="31.5"></line>
                <line x2="392" y1="47.5" y2="47.5"></line>
                <line x2="392" y1="63.5" y2="63.5"></line>
                <line x2="392" y1="79.5" y2="79.5"></line>
                <line x2="392" y1="95.5" y2="95.5"></line>
                <line x2="392" y1="111.5" y2="111.5"></line>
                <line x2="392" y1="127.5" y2="127.5"></line>
                <line x2="392" y1="143.5" y2="143.5"></line>
                <line x2="392" y1="159.5" y2="159.5"></line>
                <line x2="392" y1="175.5" y2="175.5"></line>
                <line x2="392" y1="191.5" y2="191.5"></line>
                <line x2="392" y1="207.5" y2="207.5"></line>
                <line x2="392" y1="223.5" y2="223.5"></line>
                <line x2="392" y1="239.5" y2="239.5"></line>
                <line x2="392" y1="255.5" y2="255.5"></line>
                <line
                  x1="11.9999"
                  x2="11.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line
                  x1="27.9999"
                  x2="27.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line
                  x1="43.9999"
                  x2="43.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line
                  x1="59.9999"
                  x2="59.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line
                  x1="75.9999"
                  x2="75.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line
                  x1="91.9999"
                  x2="91.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line x1="108" x2="108" y1="2.18557e-08" y2="256"></line>
                <line x1="124" x2="124" y1="2.18557e-08" y2="256"></line>
                <line x1="140" x2="140" y1="2.18557e-08" y2="256"></line>
                <line x1="156" x2="156" y1="2.18557e-08" y2="256"></line>
                <line x1="172" x2="172" y1="2.18557e-08" y2="256"></line>
                <line x1="188" x2="188" y1="2.18557e-08" y2="256"></line>
                <line x1="204" x2="204" y1="2.18557e-08" y2="256"></line>
                <line x1="220" x2="220" y1="2.18557e-08" y2="256"></line>
                <line x1="236" x2="236" y1="2.18557e-08" y2="256"></line>
                <line x1="252" x2="252" y1="2.18557e-08" y2="256"></line>
                <line x1="268" x2="268" y1="2.18557e-08" y2="256"></line>
                <line x1="284" x2="284" y1="2.18557e-08" y2="256"></line>
                <line x1="300" x2="300" y1="2.18557e-08" y2="256"></line>
                <line x1="316" x2="316" y1="2.18557e-08" y2="256"></line>
                <line x1="332" x2="332" y1="2.18557e-08" y2="256"></line>
                <line x1="348" x2="348" y1="2.18557e-08" y2="256"></line>
                <line x1="364" x2="364" y1="2.18557e-08" y2="256"></line>
                <line x1="380" x2="380" y1="2.18557e-08" y2="256"></line>
              </g>
            </svg>

            <div className="absolute top-0">
              <Image
                className="dark:invert"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={`${name} sprite`}
                width={128}
                height={128}
                priority
              />
            </div>
          </Inset>
        </Flex>

        <Text className="mb-2 font-bold">{name}</Text>
        <Flex gap="2" className="mb-2">
          {typeA ? (
            <Flex
              className={`${getPokemonTypeColor(typeA)} min-w-14 rounded-xl px-3`}
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
              className={`${getPokemonTypeColor(typeB)} min-w-14 rounded-xl px-3`}
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
      gap="4"
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
