import { ElementType } from "react";
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: ElementType
}

export function NavLink({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}