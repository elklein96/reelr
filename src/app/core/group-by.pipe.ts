import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'groupBy'})
export class GroupByPipe implements PipeTransform {

  transform (array: any[], chuckSize: number) {
    let i, j, subArray = [];
    const outputArray = [];

    if (!array || !chuckSize) return;

    for (i = 0, j = array.length; i < j; i += chuckSize) {
        subArray = array.slice(i, i + chuckSize);
        outputArray.push(subArray);
    }
    return outputArray;
  }
}
