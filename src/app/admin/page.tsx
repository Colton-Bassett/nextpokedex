import { Flex, Text, Card, Grid } from "@radix-ui/themes";
import GetAllPokemonButton from "./components/getAllPokemonButton";
import DeleteAllPokemonButton from "./components/deleteAllPokemonButton";

export default function AdminPage() {
  return (
    <Flex
      direction="column"
      className="m-auto min-h-screen min-w-full bg-[linear-gradient(180deg,#fff_10%,#fafafa_30%,#fafafa_100%)] p-8 pb-20"
    >
      <Flex
        className="mx-auto w-full max-w-4xl"
        direction="column"
        align="center"
      >
        <Text className="mb-8 text-xl text-gray-500">
          <span className="mr-4 text-3xl font-bold text-gray-900">
            Admin Page
          </span>
          Everything you need to build great pokemon on the web.
        </Text>
        <Grid
          columns={{ initial: "1", sm: "1", md: "3" }}
          gap="8"
          rows="repeat(1,180px)"
          width="auto"
        >
          <AdminCard
            title="Fetch Pokemon"
            subtitle="Fetch and log all pokemon in console (debugging)"
          >
            <GetAllPokemonButton />
          </AdminCard>
          <AdminCard
            title="Save Pokemon"
            subtitle="Fetch and save all pokemon to postgres database"
          >
            <GetAllPokemonButton />
          </AdminCard>
          <AdminCard
            title="Delete Pokemon"
            subtitle="Delete all pokemon from postgres database"
          >
            <DeleteAllPokemonButton />
          </AdminCard>
        </Grid>
      </Flex>
    </Flex>
  );
}

function AdminCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: Readonly<React.ReactNode>;
}) {
  return (
    <Card className="w-60">
      <Flex
        direction="column"
        gap="2"
        minWidth="100%"
        className="h-full"
        justify="between"
      >
        <Flex direction="column">
          <Text className="text-lg" weight="bold">
            {title}
          </Text>
          <Text>{subtitle}</Text>
        </Flex>

        {children}
      </Flex>
    </Card>
  );
}
