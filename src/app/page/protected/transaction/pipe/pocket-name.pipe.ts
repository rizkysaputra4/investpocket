import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pocketName',
})
export class PocketNamePipe implements PipeTransform {
  transform(value: string): string {
    return `Tabungan ${value} ku`;
  }
}
