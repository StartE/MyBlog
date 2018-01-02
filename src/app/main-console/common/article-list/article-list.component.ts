import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

    @Input() articleList:Article[];
    @Input() itemsPerPage:number;
    currentList:Article[] = [];
    currentPage:number = 0;
    constructor() { }

    ngOnInit() {
        this.currentPage = 0;
        this.refreshArticleList();
    }
    refreshArticleList(){
        this.currentList = [];
        let currentStart = this.currentPage * this.itemsPerPage;
        for(let i = currentStart;i<currentStart + this.itemsPerPage; i++){
            if(!!this.articleList[i]){
                this.currentList.push(this.articleList[i]);
            }else{
                return;
            }
        }
    }
    onPageChange($event){
        this.currentPage = $event.page;
        this.refreshArticleList();
    }

}
