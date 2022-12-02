import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Weapon from '../../models/weapon/weapon';
import EldenService from '../../services/weapon-service';

const WeaponSearch: FunctionComponent = () => {
 
  const [term, setTerm] = useState<string>('');
  const [weapons, setWeapons] = useState<Weapon[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);

    if(term.length <= 1) {
      setWeapons([]);
      return;
    }

    EldenService.searchWeapon(term).then(weapons => setWeapons(weapons));
  }
 
  return (
    <div className="row"> 
    <div className="col s12 m6 offset-m3 grey darken-4">
      <div className="card grey darken-3">
      <div className="card-content amber-text text-lighten-3">
        <div className="input-field">
        <input type="text" placeholder="Rechercher une arme" value={term} onChange={e => handleInputChange(e)} />
        </div> 
        <div className='collection'>
        {weapons.map((weapon) => (
          <Link key={weapon.id} to={`/weapons/${weapon.id}`} className="collection-item">
            {weapon.name}
          </Link>
        ))}
        </div> 
      </div> 
      </div> 
    </div> 
    </div>
  );
}
 
export default WeaponSearch;