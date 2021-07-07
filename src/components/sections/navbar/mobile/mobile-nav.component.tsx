import { Stack } from "@chakra-ui/react";
import { MobileNavItem } from "./mobile-nav-item.component";
import React from "react";
import { NavItem } from "src/interfaces/nav-item";

export const MobileNav: React.FC<{ navItems: Array<NavItem> }> = ({
    navItems,
}) => {
    return (
        <Stack bg="bg.primary" p={4} display={{ md: "none" }}>
            {navItems.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};
