import React from 'react';

interface TProps {
    libelle: string; 
}

const Titre: React.FunctionComponent<TProps> = (props) => {
    return (
        <div className="titre">
            <h1
                className="d-inline">{props.libelle}
                <span>{props.children}</span>
            </h1>
        </div>
    )
};

export default Titre