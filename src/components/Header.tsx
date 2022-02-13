import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from "react-icons/ri"

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="28"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text
          as="span"
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing="tight"
          color="pink.500"
          ml="1"
        >
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
        align="center"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Search on the app"
          _placeholder={{
            color: "gray.400"
          }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing={8}
          mx="4"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

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
      </Flex>
    </Flex>
  )
}