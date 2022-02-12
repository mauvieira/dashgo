import { Flex, Input, Stack, FormControl, FormLabel, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={6}>

          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              focusBorderColor="pink.500"
              variant="filled"
              bgColor="gray.900"
              _hover={{
                bgColor: "gray.900"
              }}
              placeholder="john.doe@gmail.com"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              type="password"
              id="password"
              variant="filled"
              bgColor="gray.900"
              focusBorderColor="pink.500"
              _hover={{
                bgColor: "gray.900"
              }}
              placeholder="****"
            />
          </FormControl>

        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>

      </Flex>
    </Flex>
  )
}
