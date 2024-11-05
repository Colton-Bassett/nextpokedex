import { Flex, Text } from "@radix-ui/themes";

export default function DisclaimerPage() {
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
            Disclaimer Page
          </span>
          Everything you need to build great pokemon on the web.
        </Text>
      </Flex>
    </Flex>
  );
}
