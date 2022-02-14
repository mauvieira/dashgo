import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
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
  )
}