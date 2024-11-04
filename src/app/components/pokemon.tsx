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
				<Text>{type}</Text>
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
