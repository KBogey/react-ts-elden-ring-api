import Creature from "../models/creature/creature";
import {CREATURES} from "../models/creature/mock-creature";

export default class CreatureService {

    static creatures: Creature[] = CREATURES;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

    static getCreatures(): Promise<Creature[]> {
        if(this.isDev) {
            return fetch('http://localhost:3001/creatures')
                .then(response => response.json())
                .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            resolve(this.creatures);
        });
    }

    static getCreature(name: string): Promise<Creature|null> {
        if(this.isDev) {
            return fetch(`http://localhost:3001/Creatures/${name}`)
                .then(response => response.json())
                .then(data => this.isEmpty(data) ? null : data)
                .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            resolve(this.creatures.find(creature => name));
        });
    }

    static searchCreature(term: string): Promise<Creature[]> {
        if(this.isDev) {
            return fetch(`http://localhost:3001/creatures?q=${term}`)
                .then(response => response.json())
                .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const results = this.creatures.filter(creature => creature.name.includes(term));
            resolve(results);
        });

    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}