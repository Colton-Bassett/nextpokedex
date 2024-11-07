"use client";

import { Button } from "@radix-ui/themes";
import { fetchAndSavePokemonToDB } from "../../actions/actions";
import { useTransition } from "react";

export default function SaveAllPokemonButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      color="gray"
      variant="solid"
      highContrast
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const { success, pokemonCount } = await fetchAndSavePokemonToDB();
          alert(
            `Fetch: ${success}, saved ${pokemonCount} pokemon to pokedex_pokemon`,
          );
        });
      }}
    >
      {isPending ? "Saving..." : "Save"}
    </Button>
  );
}
