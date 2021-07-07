import React from "react";
import { Box, Flex, Button, useDisclosure } from "@chakra-ui/react";

import { Logo } from "@components/ui/logo/logo.component";
import { MenuItem } from "./menu-item";
import { MobileToggle } from "./mobile-toggle";

export const Header = (props) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["brand.500", "brand.500", "transparent", "transparent"]}
            color={["white", "white", "brand.700", "brand.700"]}
            {...props}
        >
            <Flex align="center">
                <Logo />
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
                <MobileToggle isOpen={isOpen} onToggle={onToggle} />
            </Box>

            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align="center"
                    justify={[
                        "center",
                        "space-between",
                        "flex-end",
                        "flex-end",
                    ]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/how">How It works </MenuItem>
                    <MenuItem to="/faetures">Features </MenuItem>
                    <MenuItem to="/pricing">Pricing </MenuItem>
                    <MenuItem to="/signup" isLast>
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
                    </MenuItem>
                </Flex>
            </Box>
        </Flex>
    );
};
