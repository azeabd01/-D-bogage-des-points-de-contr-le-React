// Parent.jsx
import React, { useState } from 'react';
import Enfant from './Enfant';

function Parent() {
    const [compteur, setCompteur] = useState(0);

    const incrementer = () => {
        setCompteur(prevCompteur => prevCompteur + 1);  // Mise à jour avec la valeur précédente
    };

    return (
        <div>
            <h1>Composant Parent</h1>
            <button onClick={incrementer}>Incrémenter</button>
            <Enfant compteur={compteur} />
        </div>
    );
}

export default Parent;
