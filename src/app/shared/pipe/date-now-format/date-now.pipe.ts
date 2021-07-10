import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as id from 'dayjs/locale/id';

@Pipe({
  name: 'dateNow',
})
export class DateNow implements PipeTransform {
  transform(value: any): string {
    const date = dayjs().locale(id);
    const months: string[] = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];

    const day: string[] = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];

    return `${day[date.day()]}, ${date.date()} ${
      months[date.month()]
    } ${date.year()}`;
  }
}
