import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const createBorrowForm = () => {

const [books,setBooks] = useState([]);
const [users,setUsers] = useState([]);
const navigate = useNavigate();
const [borrow,setBorrow] = useState({
    bookId : "",
    userId : "",
    returned : false
});

useEffect(() => {
    const fetcjBooks = async () => {
        const response = await axios.get("/books");
        setBooks(response.data);
    };

    const fetcjUser = async () => {
        const response = await axios.get("/users");
        setUsers(response.data);
    };
    fetcjBooks();
    fetcjUser();
}, []);

const handleChange = (e) => {
    const {name , value} = e.target;
    setBorrow({
        ...borrow,
        [name] : value
    })
};

const handleSubmit = () => {

};


    return(
        <>
        <form>

        </form>

        </>

    );
}

export default createBorrowForm