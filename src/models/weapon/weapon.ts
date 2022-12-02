import Attack from './attack';
import Defence from "./defence";
import Scale from "./scale";
import RequiredAttribute from "./required-attribute";

export default class Weapon {

    id: string;
    name: string;
    image: string;
    description: string;
    category: string;
    weight: number;
    attack: Attack[];
    defence: Defence[];
    requiredAttributes: RequiredAttribute[];
    scalesWith: Scale[];

    
    constructor(
        id: string,
        name: string,
        image: string,
        description: string,
        category: string,
        weight: number,
        attack: Attack[],
        defence: Defence[],
        requiredAttributes: RequiredAttribute[],
        scalesWith: Scale[],
    ) {
     this.id = id;
     this.name = name;
     this.image = image;
     this.description = description;
     this.category = category;
     this.weight = weight;
     this.attack = attack;
     this.defence = defence;
     this.requiredAttributes = requiredAttributes;
     this.scalesWith = scalesWith;
    }
   }