import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es: <strong>{{ base }}</strong></h3>

    <button (click)="accion(base)">+{{base}}</button>

    <span>{{ contador }}</span>

    <button (click)="accion(-base)">-{{base}}</button>
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    public contador: number = 10;
    public base: number = 5;
  
    accion = (valor: number) => {
      this.contador += valor
    }
}
