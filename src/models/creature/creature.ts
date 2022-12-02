export default class Creature {

    id: string;
    name: string;
    image: string | null;
    description: string | null;
    location?: string | null;
    drops?: string[] | null;

    constructor(
        id: string,
        name: string,
        image: string,
        description: string,
        location: string,
        drops: string[]
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.location = location;
        this.drops = drops;
    }
}