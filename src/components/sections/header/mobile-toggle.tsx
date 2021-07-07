import React from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export const MobileToggle: React.FC<{ isOpen: boolean; onToggle: () => void }> =
    ({ isOpen, onToggle }) => (
        <IconButton
            onClick={onToggle}
            icon={
                isOpen ? (
                    <CloseIcon w={3} h={3} />
                ) : (
                    <HamburgerIcon w={5} h={5} />
                )
            }
            variant="ghost"
            aria-label="Toggle Navigation"
        />
    );
