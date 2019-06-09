import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertBool' })
export class ConvertBoolPipe implements PipeTransform {
    transform(value: boolean): string {
        return value == true ? 'Ja' : 'Nee'
    }; 
}
