import { SubmitHandler, useForm } from "react-hook-form";
import { Flex, Stack, Button } from '@chakra-ui/react'
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

export default function Home() {

  const { register, handleSubmit } = useForm()

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
            {...register("email", { required: true })}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="****"
            {...register("password", { required: true })}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">Sign in</Button>

      </Flex>
    </Flex>
  )
}
