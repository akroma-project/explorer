import { Pipe, PipeTransform } from '@angular/core';
import Utils from 'typesafe-web3/dist/lib/utils';
@Pipe({
  name: 'hexToAscii',
})
export class HexToAsciiPipe implements PipeTransform {
  transform(value: string): string {
    return Utils.toAscii(value);
  }
}
