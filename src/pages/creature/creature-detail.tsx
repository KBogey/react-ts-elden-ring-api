import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Creature from '../../models/creature/creature';
import CreatureService from '../../services/creature-service';
import Loader from '../../components/loader';

type Params = { id: string };

const CreatureDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const [creature, setCreature] = useState<Creature | null>(null);

    useEffect(() => {
        CreatureService.getCreature(match.params.id).then(creature => setCreature(creature));
    }, [match.params.id]);

    return (
        <div className="amber-text grey darken-4">
            {creature ? (
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <h2 className="header center">{creature.name}</h2>
                        <div className="card hoverable grey darken-3">
                            <div className="card-image">
                                {creature.image != null ? (
                                    <img src={creature.image} alt={creature.name} style={{ width: '250px', margin: '0 auto', padding: '1rem' }} />
                                ) : (
                                    <span>Pas d'image disponible</span>
                                )}
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <table className="bordered">
                                        <tbody>
                                            <tr>
                                                <td>Nom</td>
                                                <td><strong>{creature.name}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                {creature.description != null ? (
                                                    <td><p>{creature.description}</p></td>
                                                ) : (
                                                    <td><p>Pas de description disponible</p></td>
                                                )}

                                            </tr>
                                            <tr>
                                                <td>Localisation</td>
                                                <td><strong>{creature.location}</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-action">
                                    <Link to="/creatures" className="red-text text-lighten-2">Retour</Link>
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

export default CreatureDetail;