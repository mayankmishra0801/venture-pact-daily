// food class for holding food details

export class Foods{
    //  keep data types  of every data which is necessary 
    id!:number; // to prevent  ourself from making constructor we are wraiting ! , a fature of angular 13
    price!:number;
    name!:string;
    favorite:boolean = false;
    star:number = 0;
    tags?:string[];
    imageUrl!: string;
    cookTime!: string;
    origins!: string[];

}