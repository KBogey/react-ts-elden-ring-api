export default class Scale {
    name: string;
    scaling?: string;

    constructor(
        name: string,
        scaling: string
    ) {
        this.name = name;
        this.scaling = scaling;
    }
}