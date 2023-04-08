import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Train, TrainList } from 'src/app/models/train.model';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-train-item',
  templateUrl: './train-item.component.html',
  styleUrls: ['./train-item.component.css']
})
export class TrainItemComponent implements OnInit {

  train:Train = new Train();

  trainId:number = 0;



  

  constructor(private service: TrainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.trainId = params['id'];
      this.getTrainById();

    });
  }

  getTrainById(){
    this.service.getTrainById(this.trainId).subscribe({
      next: (response: Train) => {
        this.train = response;
        console.log(this.train)
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

}
