export class Stuffy {
    id: number;
    type: string
    color: string;
    size: string;
    limbs: number;

    // can only define constructor once, BUT can set default values for the class 
    // variables
    constructor(id:number=0, type:string="", color:string="", size:string="", 
      limbs:number=0){
        this.id = id;
        this.type = type;
        this.color = color;
        this.size = size;
        this.limbs = limbs;
    }
}