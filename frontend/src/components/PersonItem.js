import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const PersonItem = (props) => {
    const {name} = props;
    return <ListGroup.Item>
        <Link to={`/person/${name}`} style={{textDecoration: 'none', color: "#00308F"}}><h4 style={{fontWeight: "lighter"}}>{name}</h4></Link>
    </ListGroup.Item>
}

export default PersonItem;