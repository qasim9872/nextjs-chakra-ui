import React from "react";
import { Box, Flex, Button, useDisclosure } from "@chakra-ui/react";

import { NavItem } from "./nav-item.component";
import { MobileToggle } from "./mobile-toggle.component";
import { NavItems } from "src/interfaces/nav-item";
import { NavbarLogo } from "./navbar-logo.component";

export const Navbar: React.FC<{ navItems: NavItems }> = (props) => {
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
                <Flex
                    align="center"
                    justify={{
                        base: "center",
                        md: "space-between",
                        lg: "flex-end",
                    }}
                    direction={{
                        base: "column",
                        md: "row",
                        lg: "row",
                        xl: "row",
                    }}
                    pt={{ base: 4, lg: 0 }}
                >
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/how">How It works </NavItem>
                    <NavItem to="/faetures">Features </NavItem>
                    <NavItem to="/pricing">Pricing </NavItem>
                    <NavItem to="/signup" isLast>
                        <Button
                            size="sm"
                            rounded="md"
                            color={["brand.500", "brand.500", "white", "white"]}
                            bg={["white", "white", "brand.500", "brand.500"]}
                            _hover={{
                                bg: [
                                    "brand.100",
                                    "brand.100",
                                    "brand.600",
                                    "brand.600",
                                ],
                            }}
                        >
                            Create Account
                        </Button>
                    </NavItem>
                </Flex>
            </Box>
        </Flex>
    );
};
