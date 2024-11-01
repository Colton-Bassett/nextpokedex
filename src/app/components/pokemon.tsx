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
		<Card key={id} className="">
			<Flex direction="column" align="center">
				<Image
					className="dark:invert"
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
					alt={`${name} sprite`}
					width={90}
					height={90}
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
			columns={{ initial: "1", sm: "2", md: "3" }}
			gap="3"
			rows="4"
			width="auto"
		>
			{children}
		</Grid>
	);
}
