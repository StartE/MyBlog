/** Module */
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Http, HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';//for two-way binding

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader,TranslateModule  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';//for bootstrap style

import { DataTableModule,InputTextModule, ButtonModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';

/** Service */
import { DotaService } from './../services/dota.service';

/** Component */
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtherComponent } from './other/other.component';
import { ImageComponent } from './image/image.component';
import { OtherSub1Component } from './other/other-sub1/other-sub1.component';
import { OtherSub2Component } from './other/other-sub2/other-sub2.component';

import { TitleBarComponent } from './title-bar/title-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { FootBarComponent } from './foot-bar/foot-bar.component';
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './book/booklist/booklist.component';
import { BookContentComponent } from './book/book-content/book-content.component';

import { MainConsoleRouting } from './main-console.routing';
import { MainConsoleComponent } from './main-console.component';

import { OtherHomeComponent } from './other/other-home/other-home.component';
import { CommonComponent } from './common/common.component';
import { AbstractComponent } from './common/abstract/abstract.component';

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

    /** routing */
    MainConsoleRouting,

    /** translation */
    HttpClientModule,

    /** bootstrap */
    NgbModule,

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
    DashboardComponent,
    OtherComponent,
    ImageComponent,
    TitleBarComponent,
    SideBarComponent,
    FootBarComponent,
    BookComponent,
    BooklistComponent,
    BookContentComponent,
    OtherSub1Component,
    OtherSub2Component,
    OtherHomeComponent,
    CommonComponent,
    AbstractComponent
    ],
  providers:[
      DotaService,
  ]
})
export class MainConsoleModule { }
