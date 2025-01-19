import React from 'react';
import './Feature.css';
function Feature({ title, description, icon }) {
    return (
        <div className="feature">
            <div className="feature-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
export default Feature;