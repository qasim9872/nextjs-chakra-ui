import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Navbar } from "./navbar.component";
import { Logo } from "../logo/logo.component";

export default {
    title: "Navbar",
    component: Navbar,
    decorators: [withKnobs],
};

const Template = (args: React.ComponentProps<typeof Navbar>) => (
    <Navbar {...args} />
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    navItems: [],
    Logo: Logo,
};
