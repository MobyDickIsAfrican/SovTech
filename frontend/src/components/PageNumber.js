import ListGroup from "react-bootstrap/esm/ListGroup";
import updatePeopleAction from "../Redux/Actions/updatePeople";
import updateCurrentPageAction from '../Redux/Actions/updateCurrentPage';
import { GET_PEOPLE } from "./CONSTANTS";
import store from "../Redux";
import './pageNumber.css';

const PageNumber = (props) => {
    const {currentPage} = store.getState();
    const page = props.page;

    const higlightStyle = {
        backgroundColor: "rgb(204, 85, 0)",
        color: "white"
    };

    const goToPage = async () => {
        
         // fetch people from selected page
        const peopleRes = await fetch(`${GET_PEOPLE}${page}`);
        const people = await peopleRes.json()

        //first update current page for highlight
        store.dispatch(updateCurrentPageAction(page));
        store.dispatch(updatePeopleAction(people.people))
    };

    return (
        <ListGroup.Item onClick={async () => {await goToPage()}} className={Number(currentPage) === page ? "selected": "not-selected"}>
            {page}</ListGroup.Item>
    )
};

export default PageNumber;