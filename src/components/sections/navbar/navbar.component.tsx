import React from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";

import { MobileToggle } from "./mobile-toggle.component";
import { NavItems } from "src/interfaces/nav-item";
import { NavbarLogo } from "./navbar-logo.component";
import { NavItemContainer } from "./nav-item-container";

export const Navbar: React.FC<{ navItems: NavItems }> = ({
    navItems,
    ...props
}) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex
            p={8}
            mb={8}
            as="nav"
            w="100%"
            wrap="wrap"
            align="center"
            justify="space-between"
            bg={{ base: "brand:500", lg: "transparent" }}
            color={{ base: "white", lg: "brand.700" }}
            {...props}
        >
            <NavbarLogo />

            <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
                <MobileToggle isOpen={isOpen} onToggle={onToggle} />
            </Box>

            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <NavItemContainer navItems={navItems} />
            </Box>
        </Flex>
    );
};
