import { Row, Col } from "reactstrap";
import React from "react";
import { RouteComponentProps } from "react-router-dom";


interface MatchParams {
    biereId: string;
}
interface TProps extends RouteComponentProps<MatchParams> { }

const ModifBiere: React.FunctionComponent<TProps> = (props) => {
    const { biereId } = props.match.params
    return (
        <Row className="justify-content-center">
            <Col>
                <h1>ModifBiere : {biereId}</h1>
            </Col>
        </Row>
    )
};

export default ModifBiere