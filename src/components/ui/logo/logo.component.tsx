import React from "react";
import { Text, useBreakpointValue } from "@chakra-ui/react";

export const Logo: React.FC<{ logoText?: string }> = ({
    logoText = "My Logo",
}) => {
    return (
        <Text
            textAlign={useBreakpointValue({
                base: "center",
                md: "left",
            })}
            margin="0px"
            fontFamily={"heading"}
            color="gray.800"
        >
            {logoText}
        </Text>
    );
};
