"use client";

import { Button, Dialog, Flex } from "@radix-ui/themes";
import { deleteAllPokemon } from "../actions/actions";
import { useTransition } from "react";

export default function DeleteAllPokemonButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="red" variant="solid" disabled={isPending}>
          {isPending ? "Deleting..." : "Delete"}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Are you sure?</Dialog.Title>
        <Dialog.Description size="2" mb="4" color="gray">
          This action cannot be undone. This will permanently delete all the
          pokemon from our servers.
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              color="red"
              variant="solid"
              disabled={isPending}
              onClick={() => {
                startTransition(async () => {
                  const { success, deletedCount } = await deleteAllPokemon();
                  alert(
                    `Delete: ${success}, deleted ${deletedCount} pokemon from pokedex_pokemon`,
                  );
                });
              }}
            >
              {isPending ? "Deleting..." : "Delete"}
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
