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
  Text,
  useBreakpointValue
} from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { ActiveLink } from "../../components/ActiveLink"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"

export default function UserList() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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

            <ActiveLink href="/users/create" passHref>
              <Button
                as="a"
                colorScheme="pink"
                size="sm"
                fontSize="sm"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </ActiveLink>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                {isWideVersion &&
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                }
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                {isWideVersion && <Th />}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {isWideVersion && <Td px={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>}
                <Td>
                  <Box>
                    <Text fontWeight="bold">Mauricio Vieira</Text>
                    <Text fontSize="sm" color="gray.300">contato@vieiramauricio.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Fevereiro de 2022</Td>}
                {isWideVersion &&
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
                }
              </Tr>
              <Tr>
                {isWideVersion && <Td px={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>}
                <Td>
                  <Box>
                    <Text fontWeight="bold">Karina Carvalho</Text>
                    <Text fontSize="sm" color="gray.300">karinacarvalho@live.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td> 04 de Fevereiro de 2022</Td>}
                {isWideVersion &&
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
                }
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}