import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Creature from '../../models/creature/creature';
import './creature-card.css';

type Props = {
    creature: Creature,
    borderColor?: string
};

const CreatureCard: FunctionComponent<Props> = ({creature, borderColor = '#fff8e1'}) => {

    const [color, setColor] = useState<string>();
    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor);
    };

    const hideBorder = () => {
        setColor('#f5f5f5');
    };

    const goToCreature = (id: string) => {
        history.push(`/creatures/${id}`);
    }

    return (
        <div className="col s6 m4 p2" onMouseEnter={showBorder} onMouseLeave={hideBorder} onClick={() => goToCreature(creature.id)}>
            <div className="card horizontal" style={{ borderColor: borderColor }}>
                <div className="card-image">
                    <img src={creature.image !== null ? creature.image : creature.name} alt={creature.name}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p><strong>{creature.name}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatureCard;