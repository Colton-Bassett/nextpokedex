import { Spinner, Flex } from "@radix-ui/themes";

export default function Loading() {
  return (
    <Flex className="min-h-screen items-center" justify="center" align="center">
      <Spinner size="3"></Spinner>
    </Flex>
  );
}
