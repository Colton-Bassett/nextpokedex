import { Flex, Text, Card, Grid } from "@radix-ui/themes";
import GetPokemonButton from "../components/getPokemonButton";

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
        <Grid
          columns={{ initial: "1", sm: "2", md: "3" }}
          gap="8"
          rows="repeat(1,150px)"
          width="auto"
        >
          <AdminCard title="Admin Page"></AdminCard>
          <AdminCard title="Next Page"></AdminCard>
          <AdminCard title="Delete Page"></AdminCard>
        </Grid>
      </Flex>
    </Flex>
  );
}

function AdminCard({ title }: { title: string }) {
  return (
    <Card className="w-60">
      <Flex
        direction="column"
        gap="2"
        minWidth="100%"
        className="h-full"
        justify="between"
      >
        <Text>{title}</Text>
        <GetPokemonButton />
      </Flex>
    </Card>
  );
}
