
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
   transform(value: any, args?: any): any {
    const fs=value.substring(0, value.indexOf(' ')); // "72"
    const ls=value.substring(value.indexOf(' ') + 1);
      return [fs, ls];
   }

}