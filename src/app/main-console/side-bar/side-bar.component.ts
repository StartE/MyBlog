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
            link: "web-dev/layout-style",
        },
        {   label: "Script",
            link: "web-dev/script",
        }, 
    ];
    subItem2: Array<SubItem> =[
        {   label: "Analysis",
            link: "data-science/analysis",
        },
        {   label: "Maching Learning",
            link: "data-science/machine-learning",
        }, 
        {   label: "Visulation",
            link: "data-science/visualization",
        },
    ];
    subItem3: Array<SubItem> =[
        {   label: "Tools",
            link: "tools-resources/tools",
        },
        {   label: "Rescource",
            link: "tools-resources/resources",
        }, 
    ];
    items: Array<NavItem> =[
        {   label: "Dashboard",
            link: "dashboard",
        },
        {   label: "Web Development",
            link: "web-dev",
            expand: true,
            subItems: this.subItem1
        },
        {
            label:"Data Science",
            link:"data-science",
            expand: true,
            subItems: this.subItem2
        },
        {   label: "Tools & Resources",
            link: "tools-resources",
            expand: true,
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
        //this.selectedItem.expand = !this.selectedItem.expand;
    }
    onSubSelect(item:NavItem,subItem:SubItem){
        this.selectedSubItem = subItem;
        this.selectedItem = item;
    }
}
