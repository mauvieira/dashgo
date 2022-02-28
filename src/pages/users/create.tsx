import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { Input } from "../../components/Form/Input"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"

import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useMutation } from "react-query"
import { api } from "../../services/api"
import { queryClient } from "../../services/queryClient"
import { useRouter } from "next/router"

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object({
  name: yup.string()
    .required("Nome obrigatório"),
  email: yup.string()
    .required("E-mail obrigatório")
    .email("Insira um e-mail válido"),
  password: yup.string()
    .required("Senha obrigatória")
    .min(6, "Mínimo 6 caracteres"),
  password_confirmation: yup.string()
    .oneOf([
      null, yup.ref("password")
    ], "As senhas devem ser iguais")
}).required()

export default function CreateUser() {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const { data } = await api.post('/users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })

    return data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values);
    router.push('/users');
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          p={["6",
            "8"]}
          borderRadius={8}
          bg="gray.800"
          onSubmit={handleSubmit(handleCreateUser)}
        >

          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                type="text"
                label="Nome completo"
                {...register("name")}
                error={errors.name}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                {...register("password")}
                error={errors.password}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmar Senha"
                {...register("password_confirmation")}
                error={errors.password_confirmation}
              />
            </SimpleGrid>


            <Flex mt="8" justify="flex-end" w="100%">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="pink"
                  isLoading={isSubmitting}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>

          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}