import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  
  cardTitle = "Street Food Convention"
  cardDate = "January 14, 2019"
  cardName = "Green Joy"
  cardText = " Some quick example text to build on the card title and make up the bulk of the card's content."
}
