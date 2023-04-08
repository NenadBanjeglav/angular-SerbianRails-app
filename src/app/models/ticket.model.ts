export class Ticket{
    _id:number;
    number:number;
    from:string;
    departure:Date;
    to:string;
    arrival:Date;
    price:number;
    name:string;
    birthDate:Date;

    constructor(obj?:any){
        this._id = obj && obj._id || 0;
        this.number = obj && obj.number || 0;
        this.from = obj && obj.from || '';
        this.departure = obj && new Date(obj.departure) || new Date();
        this.to = obj && obj.to || '';
        this.arrival = obj && new Date(obj.arrival) || new Date();
        this.price = obj && obj.price || 0;
        this.name = obj && obj.name || '';
        this.birthDate = obj && new Date(obj.birthDate) || new Date();
    }
}

export class TicketList{
    count:number;
    results: Ticket[];

    constructor(obj?:any){
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((data:any)=>new Ticket(data))
    }
}