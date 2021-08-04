import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import React, { useState, useEffect } from "react";
import { PostBiere, GetStyles } from "../../../Services/ProjetBiereService";
import { IBiere, defaultBiere } from "../../../Types/Biere";


interface TProps {
}

const AddBiere: React.FunctionComponent<TProps> = (props) => {

    const [biere, setBiere] = useState<IBiere>(defaultBiere);
    const [styles, setstyles] = useState<string[]>([]);

    useEffect(() => {
        GetStyles().then(data => setstyles(data))
    }, [])

    const changeHandler = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        setBiere(() => ({
            ...biere,
            [name]: value
        })
        );
    }

    const handleSubmit = (event: any) => {
        PostBiere(biere).then((data) => { return data });
        console.log('handleSubmit() ::')
        //event.preventDefault();
    }

    return (
        <Row className="my-5 justify-content-center">
            <Col md={'6'}>
                <form>
                    <FormGroup row>
                        <Label for="nom" sm={2}>Nom:</Label>
                        <Col sm={10}>
                            <Input type="text" name="nom" id="nom"
                                value={biere.nom}
                                placeholder="Mettre ton nom"
                                onChange={changeHandler} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="ABV" sm={2}>Alchool by volume:</Label>
                        <Col>
                            <Input type="number" name="ABV" id="ABV"
                                value={biere.ABV}
                                onChange={changeHandler} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="SRM" sm={2}>SRM:</Label>
                        <Col>
                            <Input type="number" name="SRM" id="SRM"
                                value={biere.SRM}
                                onChange={changeHandler} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="IBU" sm={2}>IBU:</Label>
                        <Col>
                            <Input type="number" name="IBU" id="IBU"
                                value={biere.IBU}
                                onChange={changeHandler} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="style" sm={2}>Style</Label>
                        <Col>
                            <Input type="select" name="style" id="style"
                                onChange={changeHandler}
                                value={biere.style}>
                                {styles.map((style: string, index: number) =>
                                    <option key={style} value={style}>{style}</option>
                                )}
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="saisonniere" sm={2}>Saisonnière</Label>
                        <Col>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="saisonniere"
                                        value={1}
                                        onChange={changeHandler} />
                                        Oui
                                    </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="saisonniere"
                                        value={0}
                                        onChange={changeHandler}
                                        checked />
                                        Non
                                    </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <input type="submit" value="Submit" onClick={handleSubmit} />
                </form>
            </Col>
        </Row>
    );
}

export default AddBiere