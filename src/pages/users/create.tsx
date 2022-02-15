import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { Input } from "../../components/Form/Input"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" p={["6", "8"]} borderRadius={8} bg="gray.800">

          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" type="text" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmar Senha" />
            </SimpleGrid>


            <Flex mt="8" justify="flex-end" w="100%">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button colorScheme="pink">Salvar</Button>
              </HStack>
            </Flex>

          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}