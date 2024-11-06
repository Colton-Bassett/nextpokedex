import { Flex } from "@radix-ui/themes";
import GetPokemonButton from "./admin/components/getAllPokemonButton";
import Pokemon, { PokemonList } from "./components/pokemon";
import Link from "next/link";

export default async function Home() {
  //   const { rows } =
  //     await sql`SELECT * FROM pokedex_pokemon ORDER BY RANDOM() LIMIT 12`;
  //   console.log(rows);

  // const fetchPokemon = async () => {
  // 	const data = await getAllPokemonFromDB();
  // 	if (data) {
  // 		console.log(data);
  // 	} else {
  // 		console.error("Failed to fetch Pokémon:");
  // 	}
  // };

  const rows = [
    { id: 75, name: "Graveler", type: "GroundRock" },
    { id: 149, name: "Dragonite", type: "DragonFlying" },
    { id: 134, name: "Vaporeon", type: "Water" },
    { id: 110, name: "Weezing", type: "Poison" },
    { id: 40, name: "Wigglytuff", type: "NormalFairy" },
    { id: 44, name: "Gloom", type: "GrassPoison" },
    { id: 108, name: "Lickitung", type: "Normal" },
    { id: 86, name: "Seel", type: "Water" },
    { id: 133, name: "Eevee", type: "Normal" },
    { id: 137, name: "Porygon", type: "Normal" },
    { id: 91, name: "Cloyster", type: "WaterIce" },
    { id: 45, name: "Vileplume", type: "GrassPoison" },
  ];

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="min-h-screen min-w-full flex-col items-center justify-items-center bg-[linear-gradient(180deg,#fff_10%,#fafafa_30%,#fafafa_100%)] p-8 pb-20">
      <Flex className="m-auto w-full max-w-4xl" justify="center">
        <Flex direction="column" gap="2">
          <PokemonList>
            {rows.map((p) => (
              <Link key={p.id} href={`/pokemon/${p.id}`}>
                <Pokemon id={p.id} name={p.name} type={p.type} />
              </Link>
            ))}
          </PokemonList>
          <Flex direction="column" gap="2" minWidth="100%" className="mt-8">
            <GetPokemonButton />
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
}
