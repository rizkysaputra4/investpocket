import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTitleCase',
})
export class TitlecasePipe implements PipeTransform {
  transform(value: string): unknown {
    return value.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
