import React, { ComponentProps } from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export const MenuItem: React.FC<
    {
        isLast?: boolean;
        to: ComponentProps<typeof Link>["href"];
    } & ComponentProps<typeof Text>
> = ({ children, isLast = false, to = "/", ...rest }) => {
    return (
        <Text
            mb={{ base: isLast ? 0 : "2", sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : "2" }}
            display="block"
            {...rest}
        >
            <Link href={to}>{children}</Link>
        </Text>
    );
};
