import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Ticket, TicketList } from '../models/ticket.model';
import { TicketsService } from '../service/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets:TicketList = new TicketList();

  params = {
    sort: ''
  }

  constructor(private service: TicketsService) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(){
    this.service.getTickets(this.params).subscribe({
      next:(data:TicketList)=>{
        this.tickets = data;
        console.log(this.tickets)
      },
      error:(err:any)=>console.log(err)
    })
  }

  onCancelTicket(ticket: Ticket) {
    this.service.deleteTicket(ticket).subscribe({
      next: (tick: Ticket) => {
        this.getTickets();
      },
      error: (error: any) => {},
    });
  }

}
