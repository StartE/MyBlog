import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { articleTable } from  './../../services/article-table';
import { Article } from './../../models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit,OnDestroy {


    sub:any;
    articleId:number;
    article:Article;
    previousArticle:Article;
    nextArticle:Article;
    src:string;
    constructor(private activatedRoute: ActivatedRoute) { 
        this.sub = this.activatedRoute.params.subscribe(params =>{
            this.initArticle();
            
            if(params['id'] != undefined){
                this.articleId = parseInt(params['id']);
                if(!!articleTable[this.articleId]){
                    this.article = articleTable[this.articleId];
                    if(!!this.article['src']){
                        this.src = this.article['src'];
                    }
                }
                this.getSiblings();
            }
        })
    }

    ngOnInit() {  
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    initArticle() {
        this.src = null;
        this.previousArticle = null;
        this.nextArticle = null;
    }
    getSiblings() {
        if(this.articleId > 0){
            this.previousArticle = articleTable[this.articleId - 1];
        }
        if(this.articleId < articleTable.length -1){
            this.nextArticle = articleTable[this.articleId + 1];
        }
    }


}
