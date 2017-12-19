import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, Http } from '@angular/http';
import { MyHttpService } from './services/my-http.service';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { MainConsoleComponent } from './main-console/main-console.component';
import { MainConsoleModule } from './main-console/main-console.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainConsoleModule,
    AppRouting,
  ],
  providers: [
      MyHttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
