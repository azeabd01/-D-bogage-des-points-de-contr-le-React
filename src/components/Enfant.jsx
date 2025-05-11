// Enfant.jsx
import React from 'react';

function Enfant({ compteur }) {
    return (
        <div>
            <h2>Composant Enfant</h2>
            <p>Le compteur est : {compteur}</p>
        </div>
    );
}

export default Enfant;
