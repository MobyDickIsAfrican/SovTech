import ListGroup from 'react-bootstrap/ListGroup'
import PersonItem from './PersonItem';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Pagination from './Pagination';
 
 const PeopleList = (props) => {
     const {people} = props;
     const showPeople = (peopleArray) => {
         const PeopleUI = peopleArray.map((person) => {
             return <PersonItem key={person} name={person}/>
         });
         return PeopleUI;
     };
     return (
         <Container style={{display: "flex", justifyContent: "center"}}>           
             <Card style={{width: "50%", borderStyle: "solid", borderWidth: "1px", borderColor: "lightgrey",
              }}>
                <Card.Header><h2 style={{color: "#00308F", }}>List of People</h2></Card.Header>
                <Card.Body>
                        <ListGroup >
                            {people.length === 0 ? (<ListGroup.Item>No results Found</ListGroup.Item>): showPeople(people)}
                        </ListGroup>
                </Card.Body>
                <Card.Footer>
                    <Pagination  />
                </Card.Footer>
            </Card>
         </Container>
    )
};


export default PeopleList;