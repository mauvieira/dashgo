import { Input as ChakraInput, FormControl, FormLabel, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        variant="filled"
        bgColor="gray.900"
        _hover={{
          bgColor: "gray.900"
        }}
        {...rest}
      />
    </FormControl>
  )
} 0