import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'reactstrap';
import Line from './LineListeBieres';


interface TProps {
    cssValue: string;
    values: any;
    cles: any;
    readonly?: boolean;
}

const DefaultTable: React.FunctionComponent<TProps> = (props) => {

    const optionsLinks = (valueId: number) => 
    <>
        <td><Link to={`/ModifBiere/${valueId}`}><FontAwesomeIcon icon={faPencilAlt} /></Link></td>
        <td><Link to={`/DelBiere/${valueId}`}><FontAwesomeIcon icon={faTrashAlt} /></Link></td>
    </>;

    return (
        <Table className={props.cssValue} striped bordered hover responsive>
            <Header cles={props.cles} />
            <tbody>
                {props.values.map((value: any, index: number) =>
                    <tr key={value.id}>
                        <Line objet={value} cles={props.cles} />
                        {
                            !props.readonly &&
                            optionsLinks(value.id)
                        }
                    </tr>
                )}
            </tbody>
        </Table>
    );
}


export default DefaultTable;