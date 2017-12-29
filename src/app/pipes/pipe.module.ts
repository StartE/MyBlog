import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePipe } from './language.pipe';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        LanguagePipe
    ],
    exports:[
        LanguagePipe
    ],
})
export class PipeModule{ }