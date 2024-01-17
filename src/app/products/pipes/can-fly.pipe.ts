import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'Sí Vuela' | 'No Vuela' {
    //console.log({'value':value});
    return value ? 'Sí Vuela' : 'No Vuela';
  }

}
