import { Row, Col, Button } from "reactstrap";
import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { DeleteBiere } from "../../../Services/ProjetBiereService";


interface MatchParams {
    biereId: string;
}

interface TProps extends RouteComponentProps<MatchParams> { }

class DelBiere extends Component<TProps, {}>  {

    //Property
    biereId: string;

    constructor(props: TProps) {
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.biereId = this.props.match.params.biereId;
    }

    handleSubmit = (event: any) => {
        DeleteBiere(this.biereId);
        event.preventDefault();
    }

    render() {
        return (
            <Row className="justify-content-center">
                <Col>
                    <Button size="lg" onClick={this.handleSubmit}>
                        {`DelBiere : ${this.biereId}`}
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default DelBiere