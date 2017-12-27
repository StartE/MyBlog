import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reg-html',
})
export class LanguagePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/</g,'lt;').replace(/&/g,'amp;').replace(/>/g,'gt;')
  }
}