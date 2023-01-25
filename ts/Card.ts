export class Card {
    public ranks :string;
    public sults :string;
    constructor (ranks:string,sults:string) {
        this.ranks = ranks
        this.sults = sults
    }
    
    public get value() : string {
        return `[${this.ranks} ${this.sults}],`
    }
    
}
