import Search from "./Search";
import PeopleList from "./PeopleList";
import {useEffect} from 'react';
import store from "../Redux";
import { GET_PEOPLE } from "./CONSTANTS";
import updatePeopleAction from "../Redux/Actions/updatePeople";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Person from './Person.js';
import updatePaginationAction from '../Redux/Actions/updatePagination'


const Home = () => {
    //let { path } = useRouteMatch();
    useEffect(async () => {
        const peopleRes = await fetch(GET_PEOPLE);
        const people = await peopleRes.json()
        store.dispatch(updatePaginationAction(people.pages));
        store.dispatch(updatePeopleAction(people.people))
    }, []);
    
    return (
        <Router>
            <Navbar bg="light" expand="lg" style={{marginBottom: "30px"}}>
                    <Navbar.Brand >
                        <Link to="/" style={{textDecoration: 'none',}}><h1 style={{fontSize: "40px", color: "#00308F", paddingLeft: "10px"}}>
                            World of Star Wars</h1></Link>
                    </Navbar.Brand>
            </Navbar>
            <Routes>
                <Route exact path="/" element={
                        <>
                        <Search />
                        <PeopleList people={Object.keys(store.getState().people)}/>
                    </>
                    }>
                </Route>
                <Route path="/person/:personID" element={<Person />}>
                </Route>
            </Routes>
        </Router>
    )
};

export default Home;