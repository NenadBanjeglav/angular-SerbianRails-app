import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket.model';
import { Train } from 'src/app/models/train.model';
import { TicketsService } from 'src/app/service/tickets.service';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-train-page',
  templateUrl: './train-page.component.html',
  styleUrls: ['./train-page.component.css']
})
export class TrainPageComponent implements OnInit {

  train:Train = new Train();
  trainId:number = 0;
  ticket:Ticket = new Ticket();

  form:FormGroup = new FormGroup({
    number: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    departure: new FormControl(''),
    arrival: new FormControl(''),
    price: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
  })

  get name() {
    return this.form.get('name');
  }
  get birthDate() {
    return this.form.get('birthDate');
  }

  constructor(private service: TrainService, private route:ActivatedRoute, private ticketService: TicketsService,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.trainId = params['id'];
      this.getTrainById();
    }) 
  }

  getTrainById(){
    this.service.getTrainById(this.trainId).subscribe({
      next:(data:Train)=>{
        this.train = data;
        

        this.form.patchValue(this.train);
        this.form.controls['number'].disable();
        this.form.controls['from'].disable();
        this.form.controls['departure'].disable();
        this.form.controls['to'].disable();
        this.form.controls['arrival'].disable();
        this.form.controls['price'].disable();
        
      },
      error:(err:any)=> console.log(err)
    })
  }

  

  buyTicket(){
    this.form.controls['number'].enable();
    this.form.controls['from'].enable();
    this.form.controls['departure'].enable();
    this.form.controls['to'].enable();
    this.form.controls['arrival'].enable();
    this.form.controls['price'].enable();
    this.ticket.number = this.form.value.number;
    this.ticket.from = this.form.value.from;
    this.ticket.departure = this.form.value.departure;
    this.ticket.to = this.form.value.to;
    this.ticket.arrival = this.form.value.arrival;
    this.ticket.price = this.form.value.price;
    this.ticket.name = this.form.value.name;
    this.ticket.birthDate = this.form.value.birthDate;
    this.ticketService.buyTicket(this.ticket).subscribe((ticket:Ticket)=>{
      this.router.navigate(['/tickets'])
    })
  }



}

