import React from "react";
import { Flex } from "@chakra-ui/react";

import { Footer } from "@components/sections/footer/footer";
import { Navbar } from "@components/sections/navbar/navbar.component";

import { navItems } from "src/constants/nav.constants";
import { Logo } from "@components/ui/logo/logo.component";

export const AppLayout: React.FC = ({ children }) => {
    return (
        <Flex direction="column" minH="100vh">
            <Navbar navItems={navItems} Logo={() => <Logo logoText="Logo" />} />

            <Flex flexGrow={1}>{children}</Flex>
            <Footer />
        </Flex>
    );
};
