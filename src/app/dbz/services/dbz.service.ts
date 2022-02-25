import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    private _characters: Character[] = [{
        name: 'Goku',
        power: 15000
      },{
        name: 'Vegeta',
        power: 85000
      }
    ]

    constructor() {}
    
    get characters(): Character[] {
        return [...this._characters]
    }

    public onNewCharacter(character: Character): void {
        this._characters.push(character)
    }




}