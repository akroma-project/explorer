import { Pipe, PipeTransform } from '@angular/core';
import Utils from 'typesafe-web3/dist/lib/utils';
@Pipe({
  name: 'toAka',
})
export class WeiToAkaPipe implements PipeTransform {
  transform(value: string): string {
    return Utils.fromWei(value, 'ether') as string;
  }
}
