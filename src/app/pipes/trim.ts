import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'trim_address',
})
export class TrimAddressPipe implements PipeTransform {
  transform(value: string): string {
    if(!value || value?.length < 10) {
      return "...";
    }
    return value.slice(0, 5) + "..." + value.slice(-5);
  }
}
//