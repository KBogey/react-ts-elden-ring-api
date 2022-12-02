import Weapon from "../models/weapon/weapon";
import WEAPONS from "../models/weapon/mock-weapon";

export default class WeaponService {

  static weapons: Weapon[] = WEAPONS;

  static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

  static getWeapons(): Promise<Weapon[]> {
    if(this.isDev) {
      return fetch('http://localhost:3001/weapons')
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      resolve(this.weapons);
    });
  }

  static getWeapon(name: string): Promise<Weapon|null> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/weapons/${name}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {    
      resolve(this.weapons.find(weapon => name));
    }); 
  }

  static searchWeapon(term: string): Promise<Weapon[]> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/weapons?q=${term}`)
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {    
      const results = this.weapons.filter(weapon => weapon.name.includes(term));
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