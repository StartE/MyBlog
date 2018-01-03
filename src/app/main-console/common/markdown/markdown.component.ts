import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MarkdownService } from './markdown.service';

import * as _marked from 'marked';
import * as Prism from 'prismjs';
import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';

const marked = _marked;

@Component({
  selector: 'markdown, [markdown]',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements AfterViewInit {

    @Input() data: string;
    @Input() src: string;
    constructor(public element: ElementRef,public markdownService: MarkdownService) { }

    ngAfterViewInit() {

        if (this.data) {
            this.handleData();
        return;
        }
        if (this.src) {
            this.handleSrc();
        return;
        }
        this.handleRaw(this.element.nativeElement.innerHTML)

    }
    ngOnChanges(changes: SimpleChanges) {
        if ('data' in changes) {
        this.handleData();
        return;
        }
        if ('src' in changes) {
        this.handleSrc();
        return;
        }
    }
    translateLanguage(s:string){
        let languages ={
            'py':'python',
            'ts':'typescript',
            'js':'javascript'
        }

        if (languages[s] != undefined && languages[s] != null){
            return languages[s];
        }else{
            return s;
        }
    }
    handleData(){
        this.handleRaw(this.data);
    }
    handleRaw(raw:string){
        const markdown = this.prepare(raw);
        this.element.nativeElement.innerHTML = marked(markdown);
        Prism.highlightAll(false);//async = false
    }
    handleSrc() {
        const extension = this.src ? this.src.split('.').splice(-1).join(): null;

        this.markdownService.getSource(this.src)
        .subscribe(data => {
            const raw = extension !== 'md'
            ? '```' + this.translateLanguage(extension) + '\n' + data + '\n```'
            : data;
            this.handleRaw(raw);
        },
        error =>{
            window.alert(error)
        });
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
