import { SubItem } from "./subitem";
export class NavItem{
    label: string;
    link?: string;
    onClick? :any;
    isActive? :boolean;
    subItems?: SubItem[];
}