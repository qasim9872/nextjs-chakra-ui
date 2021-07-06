import React from "react";
import { Flex, HStack, useDisclosure } from "@chakra-ui/react";

import { NavItem } from "src/interfaces/nav-item";

export const Navbar: React.FC<{
    navItems: NavItem[];
    Logo: React.ComponentType;
}> = ({ navItems = [], Logo }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <HStack
            as="nav"
            w="100%"
            minH="60px"
            spacing={0}
            align="center"
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle="solid"
            justifyContent="space-between"
            backgroundColor="bg.secondary"
            color="gray.600"
            borderColor="gray.200"
        >
            <Flex alignItems="center">
                <Flex py="px" justifyContent="center" bgColor="gray.100">
                    <Logo />
                </Flex>

                <Flex
                    ml={10}
                    bgColor="green.200"
                    display={{ base: "none", md: "flex" }}
                >
                    <span>Nav Items 1</span>
                    <span>Nav Items 2</span>
                    <span>Nav Items 3</span>
                </Flex>
            </Flex>

            <Flex bgColor="green.200">
                <p>Call To Action</p>
            </Flex>
        </HStack>
    );
};
