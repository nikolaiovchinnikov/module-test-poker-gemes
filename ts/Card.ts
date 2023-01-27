export default class Card {
    public ranks :string;
    public sults :string;
    public points:number;
    constructor (ranks:string,sults:string,points:number) {
        this.ranks = ranks
        this.sults = sults
        this.points = points
    }
    
    public get value() : string {
        return `[${this.ranks} ${this.sults}],`
    }
    
}
