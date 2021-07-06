import React from "react";

import { Box, Text, Flex, Icon, Link, Stack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavItem } from "src/interfaces/nav-item";

export const DesktopSubNav: React.FC<NavItem> = ({ label, href, subLabel }) => (
    <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: "brand.100" }}
    >
        <Stack direction={"row"} align={"center"}>
            <Box>
                <Text
                    transition={"all .3s ease"}
                    _groupHover={{ color: "brand.600" }}
                    fontWeight={500}
                >
                    {label}
                </Text>
                <Text fontSize={"sm"}>{subLabel}</Text>
            </Box>
            <Flex
                transition={"all .3s ease"}
                transform={"translateX(-10px)"}
                opacity={0}
                _groupHover={{
                    opacity: "100%",
                    transform: "translateX(0)",
                }}
                justify={"flex-end"}
                align={"center"}
                flex={1}
            >
                <Icon w={5} h={5} as={ChevronRightIcon} color={"brand.600"} />
            </Flex>
        </Stack>
    </Link>
);
