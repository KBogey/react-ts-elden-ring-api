import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Weapon from '../../models/weapon/weapon';
import WeaponService from '../../services/weapon-service';
import Loader from '../../components/loader';
import './weapon-detail.css';

type Params = { id: string };

const WeaponDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

  const [weapon, setWeapon] = useState<Weapon | null>(null);

  useEffect(() => {
    WeaponService.getWeapon(match.params.id).then(weapon => setWeapon(weapon));
  }, [match.params.id]);

  return (
    <div className="amber-text grey darken-4">
      {weapon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <h2 className="header center">{weapon.name}</h2>
            <div className="card hoverable grey darken-3 weapon-detail">
              <div className="card-image">
                <img src={weapon.image} alt={weapon.name} style={{ width: '250px', margin: '0 auto' }} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered">
                    <tbody>
                      <tr>
                        <td>Nom</td>
                        <td><strong>{weapon.name}</strong></td>
                      </tr>
                      <tr>
                        <td>Catégorie</td>
                        <td><strong>{weapon.category}</strong></td>
                      </tr>
                      <tr>
                        <td>Dégâts</td>
                        <td><p>{weapon.description}</p></td>
                      </tr>
                      <tr>
                        <td>Poids</td>
                        <td><strong>{weapon.weight}</strong></td>
                      </tr>
                      <tr>
                        <td>Types d'attaque</td>
                        <td>
                          {weapon.attack.map(attack => (
                            <div>
                              <span key={attack.name}>{attack.name} </span>
                              <span key={attack.amount}>  {attack.amount}</span>
                            </div>
                          ))}</td>
                      </tr>
                      <tr>
                        <td>Types de defense</td>
                        <td>
                          {weapon.defence.map(defence => (
                            <div>
                              <span key={defence.name}>{defence.name} </span>
                              <span key={defence.amount}>  {defence.amount}</span>
                            </div>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <td>Attributs requis</td>
                        <td>
                          {weapon.requiredAttributes.map(requiredAttribute => (
                            <div>
                              <span key={requiredAttribute.name}>{requiredAttribute.name} </span>
                              <span key={requiredAttribute.amount}> {requiredAttribute.amount}</span>
                            </div>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <td>Amélioration d'attributs</td>
                        <td>
                          {weapon.scalesWith.map(scale => (
                            <div>
                              <span key={scale.name}>{scale.name} </span>
                              <span key={scale.scaling}> {scale.scaling}</span>
                            </div>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/weapons" className="red-text text-lighten-2">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center"><Loader /></h4>
      )}
    </div>
  );
}

export default WeaponDetail;