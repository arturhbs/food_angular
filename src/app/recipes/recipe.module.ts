export class Recipe{
     
    public  
        name:string;
        description : string;
        image: string;
     
    constructor(name:string, desc:string, image:string){
        this.name = name;
        this.description = desc;
        this.image = image;
    }    
}