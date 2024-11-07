"use client";

import { Button } from "@radix-ui/themes";
import { getAllPokemonFromDB } from "../../actions/actions";
import { useTransition } from "react";

export default function GetAllPokemonButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      color="gray"
      variant="solid"
      highContrast
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const { success, pokemonCount } = await getAllPokemonFromDB();
          alert(
            `Fetch: ${success}, fetched ${pokemonCount} pokemon from pokedex_pokemon`,
          );
        });
      }}
    >
      {isPending ? "Fetching..." : "Fetch"}
    </Button>
  );
}
