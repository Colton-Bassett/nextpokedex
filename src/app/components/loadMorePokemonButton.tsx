"use client";
import { Button } from "@radix-ui/themes";

import { useRouter } from "next/navigation";

export default function LoadMorePokemonButton() {
  const router = useRouter();
  return (
    <Button
      color="gray"
      onClick={() => router.refresh()}
      variant="surface"
      className="loadMorePokemonButton"
    >
      Load More
    </Button>
  );
}
