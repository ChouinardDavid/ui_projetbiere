import React from 'react';
import DefaultTable from '../../Misc/Table/DefaultTable';
import { Col, Button } from 'reactstrap';
import Titre from '../../Misc/Titre';
import { Link } from 'react-router-dom';

interface TProp {
    listeBieres: any;
    cles: any;
}

const TableauListeBieres: React.FunctionComponent<TProp> = (props) => {

    return (
        <div>
            <Col md={'10'}>
                <Titre /* sm={'3'}*/ libelle="Liste de bières">
                    {/* <Button onClick={() => handleClick()} className="ml-4 d-inline" color="success">Ajouter</Button> */}
                    <Link to="/AddBiere">
                        <Button className="ml-4 d-inline" color="success">Ajouter</Button>
                    </Link>
                </Titre>
            </Col>
            <Col md={'12'}>
                <DefaultTable values={props.listeBieres} cles={props.cles} cssValue="w-100" />
            </Col>
        </div>
    );
}

export default TableauListeBieres;