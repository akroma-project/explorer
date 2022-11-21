import { Pipe, PipeTransform } from '@angular/core';
import Utils from 'typesafe-web3/dist/lib/utils';
@Pipe({
  name: 'checksum',
})
export class ChecksumPipe implements PipeTransform {
  transform(value: string): string {
    return Utils.toChecksumAddress(value);
  }
}
//