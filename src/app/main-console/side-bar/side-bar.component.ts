import { Component, OnInit } from '@angular/core';
import { NavItem } from './navitem';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    timeValue:Date;
    selectedItem :NavItem;

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
        }
    ]

    constructor() { }

    ngOnInit() {
        if(!!this.items && this.items.length > 0 ){
            this.selectedItem = this.items[0];
        }
    }

    onSelect(item:NavItem){
        this.selectedItem = item;
    }

}
