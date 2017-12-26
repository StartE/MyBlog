import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as _marked from 'marked';
const marked = _marked;

@Component({
  selector: 'markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements AfterViewInit {

    @Input() data: string;
    constructor(public element: ElementRef) { }

    ngAfterViewInit() {

        console.log(this.element.nativeElement)
        this.handleRaw(this.element.nativeElement.innerHTML)

    }
    handleData(){
        this.handleRaw(this.data);
    }
    handleRaw(raw:string){
        console.log(raw)
        const markdown = this.prepare(raw);console.log(markdown)
        this.element.nativeElement.innerHTML = marked(markdown);
    }
    prepare(raw: string) {
        if (!raw) {
        return '';
        }
        let indentStart: number;
        return raw
        .replace(/\&gt;/g, '>')
        .split('\n')
        .map((line: string) => {
            // find position of 1st non-whitespace character
            // to determine the markdown indentation start
            if (line.length > 0 && isNaN(indentStart)) {
            indentStart = line.search(/\S|$/);
            }
            // remove whitespaces before indentation start
            return indentStart
            ? line.substring(indentStart)
            : line;
        }).join('\n');
  }

}
