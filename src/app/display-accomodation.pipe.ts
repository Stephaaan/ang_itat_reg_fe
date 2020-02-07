import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayAccomodation'
})
export class DisplayAccomodationPipe implements PipeTransform {

  transform(value: {from: string; to: string; name: string}[]): string {
    return value.map(item => item.name + ': ' + item.from + '-' + item.to).join('\n');
  }

}
