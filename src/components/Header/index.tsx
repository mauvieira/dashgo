import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

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
      <Logo />

      <Search />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}