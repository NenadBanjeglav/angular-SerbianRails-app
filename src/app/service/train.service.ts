import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Station, Train, TrainList } from '../models/train.model';

const trainsUrl = 'http://localhost:3000/api/trains'
const stationsUrl = 'http://localhost:3000/api/stations'

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http:HttpClient) { }

  getTrains(params?:any):Observable<TrainList>{
    let options = {};
    if(params){
      options = {
        params: new HttpParams()
        .set('filter', params.filter && JSON.stringify(params.filter) || '')
      }
    }

    return this.http.get(trainsUrl, options).pipe(
      map((data:any)=>{
        return new TrainList(data);
      })
    )
  }

  getTrainById(id:number):Observable<Train>{
    return this.http.get(trainsUrl + "/" + id).pipe(
      map((data:any)=>{
        return new Train(data);
      })
    )
  }

  getStations(): Observable<Station[]> {
    return this.http.get(stationsUrl).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Station(elem))) || [];
      })
    );
  }
}
