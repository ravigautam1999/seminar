import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-speaker',
  templateUrl: './single-speaker.component.html',
  styleUrls: ['./single-speaker.component.css']
})
export class SingleSpeakerComponent implements OnInit {

  name = "Albert Barnes"
  designation = "Founder"

  ngOnInit(): void {
  }
}
