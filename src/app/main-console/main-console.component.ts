import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-console',
  templateUrl: './main-console.component.html',
  styleUrls: ['./main-console.component.scss']
})
export class MainConsoleComponent implements OnInit {

    showSideBar:boolean = true;

    constructor(private translateService:TranslateService){
    }
    ngOnInit(){
        this.translateService.addLangs(['zh','en']);
        this.translateService.setDefaultLang('zh');
        const browserLan = this.translateService.getBrowserLang();
        this.translateService.use(browserLan.match(/en|zh/)? browserLan:'en');
    }

    onClickToggle(){
        this.showSideBar = !this.showSideBar;
        console.log(this.showSideBar)
    }

}
