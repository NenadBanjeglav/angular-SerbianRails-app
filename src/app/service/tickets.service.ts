import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ticket, TicketList } from '../models/ticket.model';

const ticketsUrl = 'http://localhost:3000/api/tickets'

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) { }

  getTickets(params?:any):Observable<TicketList>{
    let options = {};
    if(params){
      options = {
        params: new HttpParams()
        .set('sort', params.sort || '')
      }
    }
    return this.http.get(ticketsUrl, options).pipe(map((data:any)=>{
      return new TicketList(data);
    }))
  }

  buyTicket(ticket:Ticket):Observable<any>{
    return this.http.post(ticketsUrl, ticket);
  }

  deleteTicket(ticket: Ticket): Observable<Ticket> {
    return this.http
      .delete(ticketsUrl + "/" + ticket._id)
      .pipe(
        map((data: any) => {
          return new Ticket(data);
        })
      );
  }
}
