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
    subItem1: Array<SubItem> =[
        {   label: "Style & Layout",
            link: "top-1/sub1",
        },
        {   label: "Script",
            link: "top-1/sub2",
        }, 
    ];
    subItem2: Array<SubItem> =[
        {   label: "Analysis",
            link: "top-2/sub1",
        },
        {   label: "Maching Learning",
            link: "top-2/sub2",
        }, 
        {   label: "Visulation",
            link: "top-2/sub2",
        },
    ];
    subItem3: Array<SubItem> =[
        {   label: "Tools",
            link: "top-3/sub1",
        },
        {   label: "Rescource",
            link: "top-3/sub2",
        }, 
    ];
    items: Array<NavItem> =[
        {   label: "Dashboard",
            link: "dashboard",
        },
        {   label: "Web Development",
            link: "top-1",
            expand: false,
            subItems: this.subItem1
        },
        {
            label:"Data Science",
            link:"top-2",
            expand: false,
            subItems: this.subItem2
        },
        {   label: "Tools & Resource",
            link: "top-3",
            expand: false,
            subItems: this.subItem3
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
