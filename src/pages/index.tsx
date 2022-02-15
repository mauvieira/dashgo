import { SubmitHandler, useForm } from "react-hook-form"
import { Flex, Stack, Button } from "@chakra-ui/react"
import { Input } from "../components/Form/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object({
  email: yup.string()
    .required("E-mail obrigatório")
    .email("Insira um e-mail válido"),
  password: yup.string().required("Senha obrigatória")
}).required()

export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={6}>
          <Input
            label="E-mail"
            type="email"
            name="email"
            placeholder="john.doe@gmail.com"
            error={errors.email}
            {...register("email")}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="****"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">Sign in</Button>

      </Flex>
    </Flex>
  )
}
