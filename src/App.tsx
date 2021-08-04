import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import ListeBiere from './Components/Pages/ListeBiere/ListeBiere';
import AddBiere from './Components/Pages/AddBiere/AddBiere';
import DelBiere from './Components/Pages/DelBiere/DelBiere';
import ModifBiere from './Components/Pages/ModifBiere/ModifBiere';
import Row from 'reactstrap/lib/Row';
import { Col, Container } from 'reactstrap';
import Navigation from './Components/Misc/Navigation';


//"vh-100" -> hauteur à 100% du viewport(écran)

function App() {
    return (
        <Container className="vh-100" fluid>
            <Row className="justify-content-center">
                <Col>
                    <Navigation />
                </Col>
            </Row>
            <Switch>
                <Route exact path="/" component={ListeBiere} />
                <Route path="/AddBiere" component={AddBiere} />
                <Route path="/ModifBiere/:biereId" component={ModifBiere} />
                <Route path="/DelBiere/:biereId" component={DelBiere} />
            </Switch>
        </Container>
    );
}

export default App;
