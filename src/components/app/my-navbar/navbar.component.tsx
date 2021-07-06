import React from "react";
import {
    Box,
    Button,
    Collapse,
    Flex,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";

import { NavItem } from "src/interfaces/nav-item";
import { MenuToggle } from "./menu-toggle.component";
import { MobileNav } from "./mobile/mobile-nav.component";
import { DesktopNav } from "./desktop/desktop-nav.component";

export const Navbar: React.FC<{
    navItems: NavItem[];
    Logo: React.ComponentType;
}> = ({ navItems = [], Logo }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box as="nav">
            <Flex
                w="100%"
                minH="60px"
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle="solid"
                justifyContent="space-between"
                backgroundColor="bg.primary"
                borderColor="bg.secondary"
            >
                <Flex
                    ml={{ base: -2 }}
                    flex={{ base: 1, md: "auto" }}
                    display={{ base: "flex", md: "none" }}
                >
                    <MenuToggle isOpen={isOpen} onToggle={onToggle} />
                </Flex>

                <Flex
                    flex={{ base: 1 }}
                    alignItems="center"
                    justify={{ base: "center", md: "start" }}
                >
                    <Logo />

                    <Flex ml={10} display={{ base: "none", md: "flex" }}>
                        <DesktopNav navItems={navItems} />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={"flex-end"}
                    direction={"row"}
                    spacing={6}
                >
                    <Button
                        display={{ base: "none", md: "inline-flex" }}
                        fontSize={"sm"}
                        fontWeight={600}
                        color={"white"}
                        bg={"brand.400"}
                        href={"#"}
                        _hover={{
                            bg: "brand.600",
                        }}
                    >
                        Get In Touch
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav navItems={navItems} />
            </Collapse>
        </Box>
    );
};
