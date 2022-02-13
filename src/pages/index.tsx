import { Flex, Stack, Button } from '@chakra-ui/react'
import { Input } from '../components/Form/Input';

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
          <Input
            label="E-mail"
            type="email"
            name="email"
            placeholder="john.doe@gmail.com"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="****"
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">Sign in</Button>

      </Flex>
    </Flex>
  )
}
