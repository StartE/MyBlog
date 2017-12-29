import { Component, OnInit, OnChanges } from '@angular/core';


import { Article } from './../../../../models/article.model';

@Component({
  selector: 'app-top3-sub1',
  templateUrl: './top3-sub1.component.html',
  styleUrls: ['./top3-sub1.component.scss']
})
export class Top3Sub1Component implements OnInit {

    articleList:Article[] = [];
    currentArticle:any;
    constructor() { }
    ngOnInit() {

        this.initList();
    }

    initList(){
        this.articleList=[
            {id:1,name:'1hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
            {id:2,name:'2hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
            {id:3,name:'3hwdddddddddddddffddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
            {id:4,name:'4hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
            {id:5,name:'5hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
            {id:6,name:'6hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
            {id:7,name:'7hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
        ];
        this.currentArticle = this.articleList[0];    
    }
    
}
