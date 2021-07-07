export interface NavItem {
    cta?: boolean;
    label: string;
    href?: string;
    subLabel?: string;
    children?: Array<NavItem>;
}
