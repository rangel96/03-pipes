import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar: boolean = false): string {
        return (activar) ? '*'.repeat(value.length) : value;
  }

}
