import { Component, Input, OnInit } from '@angular/core';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() photoCover = ''
  @Input() cardTitle = ''
  @Input() cardDescription = ''
  @Input() date = ''
  @Input() id: number = 0

  constructor() {}

  ngOnInit(): void {
    const cardContent = fakeData[this.id]
    this.photoCover = cardContent.imageUrl
    this.cardTitle = cardContent.title
    this.cardDescription = cardContent.description
    this.date = cardContent.date
  }

}
