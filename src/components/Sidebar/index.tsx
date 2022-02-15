import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue, DrawerFooter, Button, useDisclosure } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  const { isOpen, onClose } = useSidebarDrawer()

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.800">
          <DrawerCloseButton />
          <DrawerHeader>Navegação</DrawerHeader>

          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}