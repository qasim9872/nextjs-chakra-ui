import React from "react";
import { Flex } from "@chakra-ui/react";

import { Footer } from "@components/sections/footer/footer";
import { Navbar } from "@components/sections/navbar/navbar.component";

import { navItems } from "src/constants/nav.constants";

export const AppLayout: React.FC = ({ children }) => {
    return (
        <Flex
            m="0 auto"
            minH="100vh"
            align="center"
            direction="column"
            maxW={{ xl: "1200px" }}
        >
            <Navbar navItems={navItems} />

            <Flex flexGrow={1}>{children}</Flex>
            <Footer />
        </Flex>
    );
};
