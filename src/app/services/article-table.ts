import { Article } from './../models/article.model';

interface HashTable<T>{
    [key:number]:T;
}

export const articleTable =[
          {id:0,name:'1hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools',src:'./assets/file/test.md'},
          {id:1,name:'1hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools',src:'./assets/file/test.md'},
          {id:2,name:'2hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools',src:'./assets/file/test.md'},
          {id:3,name:'3hwdddddddddddddffddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
          {id:4,name:'4hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
          {id:5,name:'5hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
          {id:6,name:'6hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
          {id:7,name:'7hwdddddddddddddddddddddddsncjscsd',path:'tools-resources',subPath:'tools'},
      ];

/** 
export const articleTable : HashTable<Article> = {
    1:this.articleList[1],
    2:this.articleList[2],
}
*/