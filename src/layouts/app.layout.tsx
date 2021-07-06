import React from "react";
import { Flex } from "@chakra-ui/react";

import { Footer } from "@components/app/footer/footer";
import { Navbar as MyNavbar } from "@components/app/my-navbar/navbar.component";
import { Navbar } from "@components/app/navbar/navbar.component";

import { navItems } from "src/constants/nav.constants";
import { Logo } from "@components/app/logo/logo.component";

export const AppLayout: React.FC = ({ children }) => {
    return (
        <Flex direction="column" minH="100vh">
            <MyNavbar
                navItems={navItems}
                Logo={() => <Logo logoText="Logo" />}
            />
            <Navbar navItems={navItems} />

            <Flex flexGrow={1}>{children}</Flex>
            <Footer />
        </Flex>
    );
};
