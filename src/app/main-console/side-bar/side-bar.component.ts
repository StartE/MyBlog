import { Component, OnInit } from '@angular/core';
import { NavItem } from './navitem';
import { SubItem } from "./subitem";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    timeValue: Date;
    selectedItem: NavItem;
    selectedSubItem: SubItem;
    showSub: boolean = false;
    otherSubItem: Array<SubItem> =[
        {   label: "sub1",
            link: "other/sub1",
        },
        {   label: "sub2",
            link: "other/sub2",
        }, 
    ];
    items: Array<NavItem> =[
        {   label: "sidebar_dashboard",
            link: "dashboard",
        },
        {   label: "sidebar_image",
            link: "top-1",
        },
        {
            label:"sidebar_book",
            link:"top-2",
        },
        {   label: "sidebar_other",
            link: "other",
            expand: false,
            subItems: this.otherSubItem
        }
    ];



    constructor() { }

    ngOnInit() {
        if(!!this.items && this.items.length > 0 ){

            this.selectedItem = this.items[0];
        }
    }

    onSelect(item:NavItem){
        this.selectedItem = item;
        this.selectedSubItem = null;
        this.selectedItem.expand = !this.selectedItem.expand;
    }
    onSubSelect(item:NavItem,subItem:SubItem){
        this.selectedSubItem = subItem;
        this.selectedItem = item;
    }
}
