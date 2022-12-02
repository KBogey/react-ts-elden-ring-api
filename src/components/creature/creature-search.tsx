import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Creature from '../../models/creature/creature';
import CreatureService from '../../services/creature-service';

const CreatureSearch: FunctionComponent = () => {

    const [term, setTerm] = useState<string>('');
    const [creatures, setCreatures] = useState<Creature[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const term = e.target.value;
        setTerm(term);

        if(term.length <= 1) {
            setCreatures([]);
            return;
        }

        CreatureService.searchCreature(term).then(creatures => setCreatures(creatures));
    }

    return (
        <div className="row">
            <div className="col s12 m6 offset-m3 grey darken-4">
                <div className="card grey darken-3">
                    <div className="card-content amber-text text-lighten-3">
                        <div className="input-field">
                            <input type="text" placeholder="Rechercher une créature" value={term} onChange={e => handleInputChange(e)} />
                        </div>
                        <div className='collection'>
                            {creatures.map((creature) => (
                                <Link key={creature.id} to={`/creatures/${creature.id}`} className="collection-item">
                                    {creature.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatureSearch;
