import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent {

  @Input('data') characters: Character[] = [];

  @Input('new') character: Character = {
    name: '',
    power: 0
  }; 

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  add() {
    if(this.character.name.trim().length === 0) {return;}
    
    // this.onNewCharacter.emit(this.character)
    this.dbzService.onNewCharacter(this.character)
    this.character = {
      name: '',
      power: 0
    }
  }
  
}
