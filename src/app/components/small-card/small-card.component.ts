import { Component, Input, OnInit } from '@angular/core';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() cardPhoto = ''
  @Input() cardTitle = ''
  @Input() cardUrl = ''
  @Input() cardDate = ''
  @Input() id = '1'

  ngOnInit(): void {
    const cardContent = fakeData[Number(this.id)]
    this.cardPhoto = cardContent.imageUrl
    this.cardTitle = cardContent.title
    this.cardDate = cardContent.date
  }

}
