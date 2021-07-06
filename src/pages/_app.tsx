import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import { AppLayout } from "src/layouts/app.layout";
import "@styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </ChakraProvider>
    );
}

export default MyApp;
