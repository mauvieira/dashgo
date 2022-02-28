import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface PaginationItemProps extends ChakraButtonProps {
  number: number;
  isCurrent?: boolean;
  onChangePage: (page: number) => void;
}

export function PaginationItem({ number, isCurrent = false, onChangePage }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
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
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500"
      }}
      onClick={() => onChangePage(number)}
    >
      {number}
    </Button>
  )
}