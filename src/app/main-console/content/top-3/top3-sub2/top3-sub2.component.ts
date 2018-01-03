import { Component, OnInit } from '@angular/core';
import { Article } from './../../../../models/article.model';

@Component({
  selector: 'app-top3-sub2',
  templateUrl: './top3-sub2.component.html',
  styleUrls: ['./top3-sub2.component.scss']
})
export class Top3Sub2Component implements OnInit {

  articleList:Article[] = [];
  currentArticle:any;
  itemsPerPage:number = 4;
  constructor() { }
  ngOnInit() {

      this.initList();
  }

  initList(){
      this.articleList=[
          {id:1,name:'1hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools',src:'./src/assets/file/html/test.html'},
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