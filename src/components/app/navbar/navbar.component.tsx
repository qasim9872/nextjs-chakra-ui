import React, { ComponentProps } from "react";
import {
    chakra,
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { NavItem } from "./nav-item";
import { DesktopNav } from "./navbar-desktop.component";
import { MobileNav } from "./navbar-mobile.component";

const NavbarWrapper = chakra(Box);

const CollapsibleNavbar: React.FC<ComponentProps<typeof Collapse>> = ({
    children,
    ...props
}) => (
    <Collapse animateOpacity {...props}>
        {children}
    </Collapse>
);

const NavbarRowWrapper = chakra(Flex, {
    baseStyle: {
        minH: "60px",
        py: { base: 2 },
        px: { base: 4 },
        borderBottom: 1,
        borderStyle: "solid",
        align: "center",
        bg: "white",
        color: "gray.600",
        borderColor: "gray.200",
    },
});

export const Navbar: React.FC<{ navItems: Array<NavItem> }> = ({
    navItems,
}) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <NavbarWrapper>
            <NavbarRowWrapper>
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>

                <Flex
                    flex={{ base: 1 }}
                    alignItems="center"
                    justify={{ base: "center", md: "start" }}
                >
                    <Text
                        textAlign={useBreakpointValue({
                            base: "center",
                            md: "left",
                        })}
                        margin="0px"
                        fontFamily={"heading"}
                        color={useColorModeValue("gray.800", "white")}
                    >
                        Logo
                    </Text>

                    <Flex display={{ base: "none", md: "flex" }} ml={10}>
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
                        bg={"pink.400"}
                        href={"#"}
                        _hover={{
                            bg: "pink.300",
                        }}
                    >
                        Get In Touch
                    </Button>
                </Stack>
            </NavbarRowWrapper>

            <CollapsibleNavbar in={isOpen}>
                <MobileNav navItems={navItems} />
            </CollapsibleNavbar>
        </NavbarWrapper>
    );
};
