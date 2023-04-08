export class Station{
    _id:number;
    name:string;
    departure: Date;
    arrival: Date;

    constructor(obj?:any){
        this._id = obj && obj._id || 0;
        this.name = obj && obj.name || '';
        this.departure = obj && new Date(obj.departure) || new Date();
        this.arrival = obj && new Date(obj.arrival) || new Date(); 
    }
}

export class Train{
    _id:number;
    number:number;
    from:string;
    departure:Date;
    to:string;
    arrival:Date;
    travels:number;
    type:string;
    price:number;
    stations:Station[];

    constructor(obj?:any){
        this._id = obj && obj._id || 0;
        this.number = obj && obj.number || 0;
        this.from = obj && obj.from || '';
        this.departure = obj && new Date(obj.departure) || new Date();
        this.to = obj && obj.to || '';
        this.arrival = obj && new Date(obj.arrival) || new Date();
        this.travels = obj && obj.travels || 0;
        this.type = obj && obj.type || '';
        this.price = obj && obj.price || 0;
        this.stations = obj && obj.stations && obj.stations.map((elem: any)=>new Station(elem)) || [];
    }
}

export class TrainList{
    count:number;
    results:Train[];

    constructor(obj?:any){
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((elem:any)=> new Train(elem)) || [];
    }
}



    
