import React from "react";
import { Flex } from "@chakra-ui/react";

import { Footer } from "@components";
import { Navbar } from "@components/app/navbar/navbar.component";

import { navItems } from "src/constants/nav.constants";

export const AppLayout: React.FC = ({ children }) => {
    return (
        <Flex direction="column" minH="100vh">
            <Navbar navItems={navItems} />
            <Flex flexGrow={1}>{children}</Flex>
            <Footer />
        </Flex>
    );
};
