import { chakra, Box, Flex } from "@chakra-ui/react";

export const NavbarContainer = chakra(Box);

export const NavbarRow = chakra(Flex, {
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

export const IconContainerMobile = chakra(Flex, {
    baseStyle: {
        flex: { base: 1, md: "auto" },
        ml: { base: -2 },
        display: { base: "flex", md: "none" },
    },
});
