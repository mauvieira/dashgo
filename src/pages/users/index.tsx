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
  useBreakpointValue,
  Spinner
} from "@chakra-ui/react"
import { useState } from "react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { ActiveLink } from "../../components/ActiveLink"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"
import { useUsers } from "../../hooks/useUsers"

export default function UserList() {

  const [currentPage, setCurrentPage] = useState(1);

  const { data: { users, totalCount }, isLoading, isFetching, error } = useUsers(currentPage);

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

              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
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

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao buscar os dados</Text>
            </Flex>
          ) : (
            <>
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
                  {users.map(({ id, name, email, createdAt }) => (
                    <Tr key={id}>
                      {isWideVersion && <Td px={["4", "4", "6"]}><Checkbox colorScheme="pink" /></Td>}
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{name}</Text>
                          <Text fontSize="sm" color="gray.300">{email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{createdAt}</Td>}
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
                  ))}
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={totalCount}
                currentPage={currentPage}
                onChangePage={setCurrentPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}