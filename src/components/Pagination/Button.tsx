import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  number: number;
  isCurrent?: boolean;
}

export function Button({ number, isCurrent = false }: ButtonProps) {
  if (isCurrent) {
    return (
      <ChakraButton
        colorScheme="pink"
        size="sm"
        fontSize="xs"
        width="4"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default"
        }}
      >
        {number}
      </ChakraButton>
    )
  }

  return (
    <ChakraButton
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500"
      }}
    >
      {number}
    </ChakraButton>
  )
}