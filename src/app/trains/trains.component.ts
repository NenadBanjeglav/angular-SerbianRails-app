import { Component, OnInit } from '@angular/core';
import { Station, TrainList } from '../models/train.model';
import { TrainService } from '../service/train.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  trains:TrainList = new TrainList();
  stations:Station[] = [];

  params = {
    filter: {
      from: '',
      to: ''
    }
  }

  constructor(private service: TrainService) { }

  ngOnInit(): void {
    this.getTrains();
    this.getStations();
  }

  getTrains(){
    this.service.getTrains(this.params).subscribe({
      next:(data:TrainList)=>{
        this.trains = data;
        console.log(this.trains)
      },
      error:(err:any)=> console.log(err)
    })
  }

  getStations(){
    this.service.getStations().subscribe({
      next:(data:Station[])=>{
        this.stations = data
        console.log(this.stations)
      },
      error:(err:any)=>console.log(err)
    })
  }

  fromChanged(event:any){
    this.params.filter.from = event.target.value;
    this.getTrains();
  }

  toChanged(event:any){
    this.params.filter.to = event.target.value;
    this.getTrains();
  }

}
