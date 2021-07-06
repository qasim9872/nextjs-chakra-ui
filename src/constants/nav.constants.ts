import { NavItem } from "src/interfaces/nav-item";

export const navItems: Array<NavItem> = [
    {
        label: "Inspiration",
        children: [
            {
                label: "Explore Design Work",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
            {
                label: "New & Noteworthy",
                subLabel: "Up-and-coming Designers",
                href: "#",
            },
        ],
    },
    {
        label: "Find Work",
        children: [
            {
                label: "Job Board",
                subLabel: "Find your dream design job",
                href: "#",
            },
            {
                label: "Freelance Projects",
                subLabel: "An exclusive list for contract work",
                href: "#",
            },
        ],
    },
    {
        label: "Learn Design",
        href: "#",
    },
    {
        label: "Hire Designers",
        href: "#",
    },
];
