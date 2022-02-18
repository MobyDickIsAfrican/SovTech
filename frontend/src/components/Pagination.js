import ListGroup from "react-bootstrap/esm/ListGroup";
import store from "../Redux";
import PageNumber from "./PageNumber";

const Pagination = () => {
    const {pages} = store.getState();
    const showPages = (amount) => {

        const pageNumbers = [];
        for(let i=0; i < amount; i++){
            let pageNumber = <PageNumber key={i + 1} page={i + 1} />
            pageNumbers.push(pageNumber);
        };
        return pageNumbers;
    };

    return (
        <ListGroup horizontal>
            {showPages(pages)}
        </ListGroup>
    )
};

export default Pagination;