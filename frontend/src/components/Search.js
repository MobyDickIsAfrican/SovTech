import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { useState } from "react";
import updatePeopleAction from "../Redux/Actions/updatePeople";
import updateCurrentPageAction from '../Redux/Actions/updateCurrentPage';
import updatePaginationAction from "../Redux/Actions/updatePagination";
import { GET_PEOPLE } from "./CONSTANTS";
import store from "../Redux";
import Container from "react-bootstrap/Container";

const Search = () => {
    const [formState, setFormState] = useState("");
    const handleChange = (e) => {
        let target = e.target;
        setFormState(target.value);
    };

    const submit = async () => {
        const peopleRes = await fetch(`${GET_PEOPLE}search/?name=${formState}`);
        const resJson = await peopleRes.json()
        const {people, pages} = resJson;
        store.dispatch(updateCurrentPageAction(1));
        store.dispatch(updatePaginationAction(pages));
        store.dispatch(updatePeopleAction(people));
    }
    return (
        <Container className="d-flex justify-content-center" style={{marginBottom: "30px"}}>
            <InputGroup  onChange={handleChange} value={formState} style={{width: "50%"}}>
                <FormControl
                placeholder="Search for person"
                aria-describedby="basic-addon2"
                className="shadow-none"
                />
                <Button variant="primary" id="search" onClick={async () => {await submit()}}>
                Search
                </Button>
            </InputGroup>
        </Container>
    )
};

export default Search;