import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../models/ticket.model';
import { TicketsService } from '../service/tickets.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input()
  ticket:Ticket = new Ticket();

  constructor(private service: TicketsService, private router: Router) { }

  ngOnInit(): void {
  }

  @Output()
  cancelTicket: EventEmitter<Ticket> = new EventEmitter();

  cancelClicked(ticket: Ticket): void {
    this.cancelTicket.emit(ticket);
  }

}
