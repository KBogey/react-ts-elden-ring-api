import React, { FunctionComponent, useState, useEffect } from 'react';
import Weapon from '../../models/weapon/weapon';
import WeaponCard from '../../components/weapon/weapon-card';
import WeaponService from '../../services/weapon-service';
import WeaponSearch from "../../components/weapon/weapon-search";
import {Link} from "react-router-dom";

const WeaponList: FunctionComponent = () => {
  const [weapons, setWeapons] = useState<Weapon[]>([]);

  useEffect(() => {
    WeaponService.getWeapons().then(weapons => setWeapons(weapons));
  }, []);

  return (
    <div>
      <h1 className="center amber-text text-darken-4">Bienvenue Sans-Éclat</h1>

      <div className="container">

        <div className="row">
          <div>
              <WeaponSearch />
            <Link to='/' className="red-text text-lighten-2">Retour</Link>
          </div>
          {weapons.map(weapon => (
            <WeaponCard key={weapon.id} weapon={weapon}/>
          ))}
        </div>

      </div>
    </div> 
  );
}

export default WeaponList;