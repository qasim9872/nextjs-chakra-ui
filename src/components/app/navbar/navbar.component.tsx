import React from "react";
import {
    Flex,
    Text,
    Stack,
    Button,
    Collapse,
    IconButton,
    useDisclosure,
    useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { NavItem } from "../../../interfaces/nav-item";
import { DesktopNav } from "./navbar-desktop.component";
import { MobileNav } from "./navbar-mobile.component";
import {
    NavbarRow,
    NavbarContainer,
    IconContainerMobile,
} from "./navbar.styles";

export const Navbar: React.FC<{ navItems: Array<NavItem> }> = ({
    navItems,
}) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <NavbarContainer>
            <NavbarRow>
                <IconContainerMobile>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant="ghost"
                        aria-label="Toggle Navigation"
                    />
                </IconContainerMobile>

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
                        color="gray.800"
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
            </NavbarRow>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav navItems={navItems} />
            </Collapse>
        </NavbarContainer>
    );
};
