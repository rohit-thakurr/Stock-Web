import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toBillion',
})
export class ToBillionPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1000000000) {
      return (value / 1000000000).toFixed(2) + 'B';
    } else {
      return (value / 1000000).toFixed(2) + 'M';
    }
  }
}
