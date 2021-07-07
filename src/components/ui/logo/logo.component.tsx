import React, { ComponentProps } from "react";
import { Text } from "@chakra-ui/react";

export const Logo: React.FC<
    { logoText?: string } & ComponentProps<typeof Text>
> = ({ logoText = "My Logo", ...props }) => {
    return (
        <Text fontSize="lg" fontFamily={"heading"} {...props}>
            {logoText}
        </Text>
    );
};
