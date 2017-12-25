import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.scss']
})
export class AbstractComponent implements OnInit {

  @Input() articleTitle:string;
  @Input() words:number;
  @Input() content:string;
  @Input() type:string;
  cutString: string;
  showHint:boolean = false;
  hint1:string = "Show All";
  hint2:string = "Hide Remaining";
  hint:string = this.hint1;
  constructor() { }

  ngOnInit() {
    this.generateAbstract();
  }
  generateAbstract(){
    if(this.content.length < this.words){
      this.showHint = false;
      this.cutString = this.content;
    }else{
      this.showHint = true;
      this.cutString = this.content.substring(0,this.words)+'...';
    }    
  }
  toggleBtn(){
    if (this.hint == this.hint1){
      this.cutString = this.content;
      this.hint = this.hint2;
    }else if(this.hint == this.hint2){
      this.cutString = this.content.substring(0,this.words)+'...';
      this.hint = this.hint1;
    }
  }
}
