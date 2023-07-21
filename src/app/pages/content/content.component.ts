import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() photoCover = ''
  @Input() title = ''
  @Input() description = ''
  @Input() text = ['']

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      const id = value.get('id')
      if (id) {
        const pageContent = fakeData[Number(id)]
        this.text = pageContent.content
        this.photoCover = pageContent.imageUrl
        this.title = pageContent.title
        this.description = pageContent.description
      }
  })
  }

}
