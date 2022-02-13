import { Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="28"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text
          as="span"
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing="tight"
          color="pink.500"
          ml="1"
        >
          .
        </Text>
      </Text>
    </Flex>
  )
}