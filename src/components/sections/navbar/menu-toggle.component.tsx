import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

export const MenuToggle: React.FC<{ isOpen: boolean; onToggle: () => void }> =
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
