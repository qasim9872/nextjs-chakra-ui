import { Flex } from "@chakra-ui/layout";
import { Logo } from "@components/ui/logo/logo.component";
import React from "react";

export const NavbarLogo: React.FC = () => (
    <Flex align="center">
        <Logo
            textAlign={{
                base: "center",
                md: "left",
            }}
            color={{ base: "white", lg: "brand.500" }}
        />
    </Flex>
);
