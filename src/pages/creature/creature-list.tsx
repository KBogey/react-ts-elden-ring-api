import React, { FunctionComponent, useState, useEffect } from 'react';
import Creature from '../../models/creature/creature';
import CreatureCard from '../../components/creature/creature-card';
import CreatureService from "../../services/creature-service";
import CreatureSearch from "../../components/creature/creature-search";
import {Link} from "react-router-dom";

const CreatureList: FunctionComponent = () => {
    const [creatures, setCreatures] = useState<Creature[]>([]);

    useEffect(() => {
        CreatureService.getCreatures().then(creatures => setCreatures(creatures));
    }, []);

    return (
        <div>
            <h1 className="center amber-text text-darken-4">Bienvenue Sans-Éclat</h1>
            <div className="container">
                <div className="row">
                    <div>
                    <CreatureSearch />
                    <Link to='/' className="red-text text-lighten-2">Retour</Link>
                    </div>
                    {creatures.map(creature => (
                        <CreatureCard key={creature.id} creature={creature}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CreatureList;