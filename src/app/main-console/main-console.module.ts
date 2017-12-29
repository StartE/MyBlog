/** Module */
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Http, HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';//for two-way binding

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader,TranslateModule  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { PipeModule } from './../pipes/pipe.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';//for bootstrap style

import { DataTableModule,InputTextModule, ButtonModule } from 'primeng/primeng';
import { CalendarModule,PaginatorModule  } from 'primeng/primeng';

/** Service */
import { DotaService } from './../services/dota.service';
import { MarkdownService } from './common/markdown/markdown.service';

/** Component */

import { TitleBarComponent } from './title-bar/title-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { MainConsoleRouting } from './main-console.routing';
import { MainConsoleComponent } from './main-console.component';
import { CommonComponent } from './common/common.component';
import { AbstractComponent } from './common/abstract/abstract.component';
import { MarkdownComponent } from './common/markdown/markdown.component';

import { Top0Component } from './content/top-0/top-0.component';
import { Top1Component } from './content/top-1/top-1.component';
import { Top2Component } from './content/top-2/top-2.component';
import { Top3Component } from './content/top-3/top-3.component';
import { Top1HomeComponent } from './content/top-1/top1-home/top1-home.component';
import { Top1Sub1Component } from './content/top-1/top1-sub1/top1-sub1.component';
import { Top1Sub2Component } from './content/top-1/top1-sub2/top1-sub2.component';
import { Top2HomeComponent } from './content/top-2/top2-home/top2-home.component';
import { Top2Sub1Component } from './content/top-2/top2-sub1/top2-sub1.component';
import { Top2Sub2Component } from './content/top-2/top2-sub2/top2-sub2.component';
import { Top2Sub3Component } from './content/top-2/top2-sub3/top2-sub3.component';
import { Top3Sub1Component } from './content/top-3/top3-sub1/top3-sub1.component';
import { Top3Sub2Component } from './content/top-3/top3-sub2/top3-sub2.component';
import { Top3HomeComponent } from './content/top-3/top3-home/top3-home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleItemComponent } from './common/article-item/article-item.component';
import { ArticleListComponent } from './common/article-list/article-list.component';

export function createTranslateHttpLoader(http: HttpClient){
    return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,

    /** primeng */
    DataTableModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    PaginatorModule,

    /** routing */
    MainConsoleRouting,

    /** translation */
    HttpClientModule,

    /** bootstrap */
    NgbModule,

    /** Pipe */
    PipeModule,

    TranslateModule.forRoot({
        loader:{
            provide: TranslateLoader,
            useFactory:(createTranslateHttpLoader),
            deps:[HttpClient]
        }
    }),
  ],
  declarations: [
    MainConsoleComponent,
    TitleBarComponent,
    SideBarComponent,
    CommonComponent,
    AbstractComponent,
    MarkdownComponent,
    Top1HomeComponent,
    Top1Sub1Component,
    Top1Sub2Component,
    Top2HomeComponent,
    Top2Sub1Component,
    Top2Sub2Component,
    Top2Sub3Component,
    Top3Sub1Component,
    Top3Sub2Component,
    Top0Component,
    Top3HomeComponent,
    Top1Component,
    Top2Component,
    Top3Component,
    ArticlesComponent,
    ArticleItemComponent,
    ArticleListComponent
    ],
  providers:[
      DotaService,
      MarkdownService
  ]
})
export class MainConsoleModule { }
