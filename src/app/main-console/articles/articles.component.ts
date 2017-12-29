import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {


    sub:any;
    articleId:number;
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params =>{
            if(params['id'] != undefined){
                this.articleId = parseInt(params['id']);
            }
        })
    }

}
