import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() filmName = 'Super man';
  @Input() img = 'https://storge.pic2.me/upload/692/57caff3a92036.jpg';
  @Input() yearOfIssue = '12 июня 2013 г.';
}
