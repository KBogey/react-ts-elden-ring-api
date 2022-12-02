import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Weapon from '../../models/weapon/weapon';
import './weapon-card.css';

type Props = {
  weapon: Weapon,
  borderColor?: string
};

const WeaponCard: FunctionComponent<Props> = ({weapon, borderColor = '#fff8e1'}) => {
 
  const [color, setColor] = useState<string>();
  const history = useHistory();
 
  const showBorder = () => {
    setColor(borderColor);
  };
 
  const hideBorder = () => {
    setColor('#f5f5f5');
  };

  const goToWeapon = (id: string) => {
    history.push(`/weapons/${id}`);
  }
 
  return (
    <div className="col s6 m4 p2" onMouseEnter={showBorder} onMouseLeave={hideBorder} onClick={() => goToWeapon(weapon.id)}>
      <div className="card horizontal" style={{ borderColor: borderColor }}>
        <div className="card-image"> 
          <img src={weapon.image} alt={weapon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p><strong>{weapon.name}</strong></p>
            <div>
              <p><small>Catégorie : {weapon.category}</small></p>
              <p><small>Poids : {weapon.weight}</small></p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
 
export default WeaponCard;