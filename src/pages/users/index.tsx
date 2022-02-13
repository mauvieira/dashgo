import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text
} from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" p="8" borderRadius={8} bg="gray.800">
          <Flex mb="8" justify="space-between" align="center">

            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              colorScheme="pink"
              size="sm"
              fontSize="sm"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>

          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6"><Checkbox colorScheme="pink" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Mauricio Vieira</Text>
                    <Text fontSize="sm" color="gray.300">contato@vieiramauricio.com</Text>
                  </Box>
                </Td>
                <Td>
                  04 de Fevereiro de 2022
                </Td>
                <Td>
                  <Button
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6"><Checkbox colorScheme="pink" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Karina Carvalho</Text>
                    <Text fontSize="sm" color="gray.300">karinacarvalho@live.com</Text>
                  </Box>
                </Td>
                <Td>
                  04 de Fevereiro de 2022
                </Td>
                <Td>
                  <Button
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  )
}