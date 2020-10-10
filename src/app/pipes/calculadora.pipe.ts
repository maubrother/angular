import { NgClass } from '@angular/common';
import { Pipe,PipeTransform } from '@angular/core';

@Pipe({ name: 'calculadora' })
export class CalculadoraPipe implements PipeTransform{
    transform(valorA: number, valorB: number): any{
        let c = valorA + valorB;
        return 'La suma de '+valorA+' '+ valorB +' = '+c;
    }
}