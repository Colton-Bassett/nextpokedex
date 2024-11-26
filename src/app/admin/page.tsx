import { Flex, Text, Card, Grid, Inset } from "@radix-ui/themes";
import GetAllPokemonButton from "./components/getAllPokemonButton";
import DeleteAllPokemonButton from "./components/deleteAllPokemonButton";
import SaveAllPokemonButton from "./components/saveAllPokemonButton";

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
        <Flex className="mb-8 flex-col items-center justify-center sm:flex-row">
          <Text className="mb-3 text-center text-3xl font-bold text-gray-900 sm:mb-0 sm:mr-4">
            Admin Page
          </Text>
          <Text className="text-center text-xl text-gray-500">
            Everything you need to build great pokemon on the web.
          </Text>
        </Flex>

        <Grid
          columns={{ initial: "1", sm: "1", md: "3" }}
          gap="8"
          rows="repeat"
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
            <SaveAllPokemonButton />
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
    <Card className="h-[350px] w-60">
      <Flex
        direction="column"
        gap="2"
        minWidth="100%"
        className="h-full"
        justify="between"
      >
        <Flex direction="column">
          <Inset clip="padding-box" side="top" pb="current">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className=""
              height="129"
              viewBox="0 0 240 129"
              width="240"
            >
              <g opacity="0.08" stroke="#000" strokeDasharray="1 1">
                <line x2="392" y1="15.5" y2="15.5"></line>
                <line x2="392" y1="31.5" y2="31.5"></line>
                <line x2="392" y1="47.5" y2="47.5"></line>
                <line x2="392" y1="63.5" y2="63.5"></line>
                <line x2="392" y1="79.5" y2="79.5"></line>
                <line x2="392" y1="95.5" y2="95.5"></line>
                <line x2="392" y1="111.5" y2="111.5"></line>
                <line x2="392" y1="127.5" y2="127.5"></line>
                <line x2="392" y1="143.5" y2="143.5"></line>
                <line x2="392" y1="159.5" y2="159.5"></line>
                <line x2="392" y1="175.5" y2="175.5"></line>
                <line x2="392" y1="191.5" y2="191.5"></line>
                <line x2="392" y1="207.5" y2="207.5"></line>
                <line x2="392" y1="223.5" y2="223.5"></line>
                <line x2="392" y1="239.5" y2="239.5"></line>
                <line x2="392" y1="255.5" y2="255.5"></line>
                <line
                  x1="11.9999"
                  x2="11.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line
                  x1="27.9999"
                  x2="27.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line
                  x1="43.9999"
                  x2="43.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line
                  x1="59.9999"
                  x2="59.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line
                  x1="75.9999"
                  x2="75.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line
                  x1="91.9999"
                  x2="91.9999"
                  y1="2.18557e-08"
                  y2="256"
                ></line>
                <line x1="108" x2="108" y1="2.18557e-08" y2="256"></line>
                <line x1="124" x2="124" y1="2.18557e-08" y2="256"></line>
                <line x1="140" x2="140" y1="2.18557e-08" y2="256"></line>
                <line x1="156" x2="156" y1="2.18557e-08" y2="256"></line>
                <line x1="172" x2="172" y1="2.18557e-08" y2="256"></line>
                <line x1="188" x2="188" y1="2.18557e-08" y2="256"></line>
                <line x1="204" x2="204" y1="2.18557e-08" y2="256"></line>
                <line x1="220" x2="220" y1="2.18557e-08" y2="256"></line>
                <line x1="236" x2="236" y1="2.18557e-08" y2="256"></line>
                <line x1="252" x2="252" y1="2.18557e-08" y2="256"></line>
                <line x1="268" x2="268" y1="2.18557e-08" y2="256"></line>
                <line x1="284" x2="284" y1="2.18557e-08" y2="256"></line>
                <line x1="300" x2="300" y1="2.18557e-08" y2="256"></line>
                <line x1="316" x2="316" y1="2.18557e-08" y2="256"></line>
                <line x1="332" x2="332" y1="2.18557e-08" y2="256"></line>
                <line x1="348" x2="348" y1="2.18557e-08" y2="256"></line>
                <line x1="364" x2="364" y1="2.18557e-08" y2="256"></line>
                <line x1="380" x2="380" y1="2.18557e-08" y2="256"></line>
              </g>
            </svg>
          </Inset>
          <Flex direction="column" className="mt-4">
            <Text className="mb-1 text-lg" weight="bold">
              {title}
            </Text>
            <Text className="text-gray-600">{subtitle}</Text>
          </Flex>
        </Flex>

        {children}
      </Flex>
    </Card>
  );
}
