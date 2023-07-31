import { Component } from '@angular/core';

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent {
   ticketList = [
    "One Day Conference Ticket",
    "Coffee-break",
    "Lunch and Networking",
    "Keynote talk",
    "Talk to the Editors Session"
   ]
}
