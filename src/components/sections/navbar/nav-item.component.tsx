import React, { ComponentProps } from "react";
import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";

import { NavItem as INavItem } from "src/interfaces/nav-item";

export const NavItem: React.FC<INavItem & ComponentProps<typeof Text>> = ({
    cta,
    href,
    label,
}) => {
    return (
        // <Text
        //     mb={{ base: isLast ? 0 : "2", sm: 0 }}
        //     mr={{ base: 0, sm: isLast ? 0 : "2" }}
        //     display="block"
        //     {...rest}
        // >
        //     <Link href={to}>{children}</Link>
        // </Text>
        <Button>
            <Link href={href}>{label}</Link>
        </Button>
    );
};
