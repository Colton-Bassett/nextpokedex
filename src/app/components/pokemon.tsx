import { Card, Flex, Text, Grid, Box } from "@radix-ui/themes";
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
			className="bg-transparent hover:shadow-[0_0_0_0.25px_rgba(17,17,17,1)] hover:bg-white transition-shadow duration-200 ease-in-out"
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
				<Text>{name}</Text>
				<Flex>
					{typeA ? (
						<Flex
							className={`${getPokemonTypeColor(typeA)} px-2 rounded-xl min-w-14`}
							align="center"
							justify="center"
						>
							<Text className="text-sm font-light">{typeA}</Text>
						</Flex>
					) : (
						<></>
					)}

					{typeB ? (
						<Flex
							className={`${getPokemonTypeColor(typeB)} px-2 rounded-xl min-w-14`}
							align="center"
							justify="center"
						>
							<Text className="text-sm font-light text-center">
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
			columns={{ initial: "2", sm: "3", md: "4" }}
			gap="8"
			rows="4"
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
		Normal: "bg-gray-400",
		Fire: "bg-red-500",
		Water: "bg-blue-500",
		Electric: "bg-yellow-400",
		Grass: "bg-green-500",
		Ice: "bg-cyan-300",
		Fighting: "bg-red-700",
		Poison: "bg-purple-500",
		Ground: "bg-yellow-600",
		Flying: "bg-indigo-300",
		Psychic: "bg-pink-500",
		Bug: "bg-lime-500",
		Rock: "bg-yellow-800",
		Ghost: "bg-purple-700",
		Dragon: "bg-indigo-600",
		Dark: "bg-gray-800",
		Steel: "bg-gray-500",
		Fairy: "bg-pink-300",
	};

	return typeColorMap[type] || "bg-gray-200"; // Returns a default color if type not found
}
