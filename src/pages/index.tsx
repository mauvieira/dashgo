import { SubmitHandler, useForm } from "react-hook-form"
import { Flex, Stack, Button } from "@chakra-ui/react"
import { Input } from "../components/Form/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useRouter } from "next/router";

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object({
  email: yup.string()
    .required("E-mail required")
    .email("Insert a valid email"),
  password: yup.string().required("Password required")
}).required()

export default function Home() {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    router.push('/users')
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

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={isSubmitting}>
          Sign in
        </Button>
      </Flex>
    </Flex>
  )
}
