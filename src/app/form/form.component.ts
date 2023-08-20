import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  displayAlert = false;

  name = "";
  lastId = 0;

  @Output() addedUser = new EventEmitter();

  constructor() { }

  concatName(nameInputValue : string) {
    this.name = nameInputValue + ' concat';
  }

  showAlert() {
    this.displayAlert = true;
  }

  hideAlert() {
    this.displayAlert = false;
  }

  setName(event : any){
    console.log(event);
    this.name = event.target.value;
  }

  addUser() {
    const user = {
      id: ++this.lastId,
      name: this.name
    }
    this.addedUser.emit(user);
  }
}


