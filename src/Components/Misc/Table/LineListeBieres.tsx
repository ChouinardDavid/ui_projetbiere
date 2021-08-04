import React from 'react';

interface TProps {
    objet: any;
    cles: string[];
}

const Line: React.FunctionComponent<TProps> = (props) => {

    const IsSaisonniere = (key: string, value: boolean) => {
        if (key === "saisonniere") {
            if (value === true) {
                return "oui"
            }
            return "non"
        }
        return value
    }

    return (
        <>
            {props.cles.map((value: string, index: number) => <td key={value}>{IsSaisonniere(value, props.objet[value])}</td>)}
        </>);
};

export default Line
