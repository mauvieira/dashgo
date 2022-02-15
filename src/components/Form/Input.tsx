import { forwardRef, ForwardRefRenderFunction } from "react"
import { FieldError } from "react-hook-form";
import { Input as ChakraInput, FormControl, FormLabel, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react"

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, error, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
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
          ref={ref}
          {...rest}
        />

        {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }

export const Input = forwardRef(InputBase);