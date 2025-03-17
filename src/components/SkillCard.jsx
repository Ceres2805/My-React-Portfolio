import React from 'react';
import '../css/SkillCard.css';

const SkillCard = ({title, imageUrl}) => {
    return (
        <div className="skill-card">
            <img src={imageUrl} alt={title} className="skill-image" />
        </div>
    );
};

export default SkillCard;