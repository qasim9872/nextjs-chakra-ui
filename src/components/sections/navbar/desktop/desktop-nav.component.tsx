import React from "react";
import {
    Box,
    Link,
    Stack,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@chakra-ui/react";

import { NavItem } from "src/interfaces/nav-item";
import { DesktopSubNav } from "./desktop-sub-nav.component";

export const DesktopNav: React.FC<{ navItems: Array<NavItem> }> = ({
    navItems,
}) => (
    <Stack direction={"row"} spacing={4}>
        {navItems.map((navItem) => (
            <Box key={navItem.label}>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                    <PopoverTrigger>
                        <Link
                            p={2}
                            href={navItem.href ?? "#"}
                            fontSize={"sm"}
                            fontWeight={500}
                            color="text.secondary"
                            _hover={{
                                textDecoration: "none",
                                color: "text.primary",
                            }}
                        >
                            {navItem.label}
                        </Link>
                    </PopoverTrigger>

                    {navItem.children && (
                        <PopoverContent
                            border={0}
                            boxShadow={"xl"}
                            bg="bg.primary"
                            p={4}
                            rounded={"xl"}
                            minW={"sm"}
                        >
                            <Stack>
                                {navItem.children.map((child) => (
                                    <DesktopSubNav
                                        key={child.label}
                                        {...child}
                                    />
                                ))}
                            </Stack>
                        </PopoverContent>
                    )}
                </Popover>
            </Box>
        ))}
    </Stack>
);
