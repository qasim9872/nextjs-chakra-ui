import React from "react";
import { Spacer, Flex } from "@chakra-ui/react";

import { Main, Cards } from "@components";

const Home: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            <Main />
            <Cards />
            <Spacer />
        </Flex>
    );
};

export default Home;
