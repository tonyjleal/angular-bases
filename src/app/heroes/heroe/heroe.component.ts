import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroComponent {

    public name: string = 'Ironman'
    public age: number = 45

    public get nameCapitalize(): string {
        return this.name.toUpperCase();
    }

    public getName = (): string => {

        return `${ this.name } - ${ this.age }`;
    }

    public setName(name: string): void {
         this.name = name;
    }

    public setAge(age: number):void {
        this.age = age;
    }
}