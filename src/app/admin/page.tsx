import { Flex, Text } from "@radix-ui/themes";
import GetPokemonButton from "../components/getPokemonButton";

export default function AdminPage() {
	return (
		<div className="flex items-center justify-items-center min-h-screen p-8 pb-20 min-w-full">
			<div className="flex flex-col items-center max-w-5xl w-full m-auto px-7">
				<Flex direction="column" gap="2">
					<Text>Admin Page</Text>
					<GetPokemonButton />
				</Flex>
			</div>
		</div>
	);
}
