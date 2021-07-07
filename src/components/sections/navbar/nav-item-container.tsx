import { Flex, HStack } from "@chakra-ui/layout";
import React from "react";
import { NavItems } from "src/interfaces/nav-item";
import { NavItem } from "./nav-item.component";

export const NavItemContainer: React.FC<{ navItems: NavItems }> = ({
    navItems,
}) => {
    return (
        <HStack
            spacing={5}
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
            {navItems.map((navItem) => (
                <NavItem {...navItem} />
            ))}
        </HStack>
    );
};
