import { Flex, Text } from "@radix-ui/themes";
import GetPokemonButton from "../components/getPokemonButton";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-items-center p-8 pb-20">
      <div className="m-auto flex w-full max-w-4xl flex-col items-center px-7">
        <Flex direction="column" gap="2">
          <Text>Admin Page</Text>
          <GetPokemonButton />
        </Flex>
      </div>
    </div>
  );
}
