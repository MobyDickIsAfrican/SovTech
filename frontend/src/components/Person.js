import {useParams} from "react-router-dom";
import store from "../Redux";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from "react-bootstrap/esm/ListGroup";


const Person = (props) => {
    const {personID} = useParams();
    const {name, height, mass, gender, homeworld} = store.getState().people[personID];
    return (
        <Container className="d-flex justify-content-center" style={{width: "100%"}}>
            <Card bg="light"  style={{width: "50%", borderColor: "lightgrey"}}>
                <Card.Header><h2 style={{color: "#00308F"}}>Bio</h2></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item><h4 style={{color: "#00308F", fontWeight: "lighter"}}>Name: {name}</h4></ListGroup.Item>
                    <ListGroup.Item><h4 style={{color: "#00308F", fontWeight: "lighter"}}>Height: {height}</h4></ListGroup.Item>
                    <ListGroup.Item><h4 style={{color: "#00308F", fontWeight: "lighter"}}>Mass: {mass}</h4></ListGroup.Item>
                    <ListGroup.Item><h4 style={{color: "#00308F", fontWeight: "lighter"}}>Gender: {gender}</h4></ListGroup.Item>
                    <ListGroup.Item><h4 style={{color: "#00308F", fontWeight: "lighter"}}>Homeworld: {homeworld}</h4></ListGroup.Item>

                </ListGroup>
            </Card>
        </Container>
    )
};

export default Person;