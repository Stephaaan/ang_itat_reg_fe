import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToDots'
})
export class TextToDotsPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 130) {
      return value.substr(0, 127) + "...";
    }
    return value
  }

}
