import React from 'react';


interface TProps {
    cles: string[];
}

const Header: React.FunctionComponent<TProps> = (props) => {
    return (
        <thead>
            <tr key="header">
                {props.cles.map((cle: any, index: number) => <th key={cle}>{cle}</th>)}
            </tr>
        </thead>
    );
};

export default Header

