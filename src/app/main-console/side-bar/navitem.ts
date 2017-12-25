import { SubItem } from "./subitem";
export class NavItem{
    label: string;
    link?: string;
    onClick? :any;
    expand?: boolean;
    isActive? :boolean;
    subItems?: SubItem[];
}