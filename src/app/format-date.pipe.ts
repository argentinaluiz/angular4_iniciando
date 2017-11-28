import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.lenght < 10) {
      return value;
    }
    const dateArray = value.split('-');
    if (dateArray.length!=3) {
      return value;
    }
    const date = new Date(dateArray[0], dateArray[1]-1, dateArray[2]);
    return Intl.DateTimeFormat('pt-BR').format(date);
  }

}
