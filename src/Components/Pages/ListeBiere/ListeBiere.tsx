import { Row, Col } from "reactstrap";
import React, { useState, useEffect } from "react";
import TableauListeBieres from "./TableauListeBieres";
import { GetBieres } from "../../../Services/ProjetBiereService";
import { IBiere } from "../../../Types/Biere";


interface TProps {
}

interface LstBieresState {
    bieres: IBiere[],
    cles: string[]
}

const ListeBiere: React.FunctionComponent<TProps> = (props) => {

    const [listeBieres, setListeBieres] = useState<LstBieresState>({ bieres: [], cles: [] });

    useEffect(() => {
        GetBieres().then(data => {
            setListeBieres({
                bieres: data,
                cles: Object.keys(data[0])
            })
        })
    }, []);

    return (
        <Row className="my-5 justify-content-center">
            <Col>
                <TableauListeBieres cles={listeBieres.cles} listeBieres={listeBieres.bieres} />
            </Col>
        </Row>
    )
};

export default ListeBiere