import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input('client') buyer: any;

  getCardStyle() {
    return {
      backgroundColor: this.buyer.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }

  isAdmin() {
    return this.buyer.name.startsWith('T');
  }
}




