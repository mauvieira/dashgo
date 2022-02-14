import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Mauricio Vieira</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          contato@vieiramauricio.com
        </Text>
      </Box>
      <Avatar size="md" name="Mauricio Vieira" src="https://avatars.githubusercontent.com/u/37835413?s=400&u=3bf7f84ccac1d1f878fa6bab8e93963ea42bddf0&v=4" />
    </Flex>
  )
}