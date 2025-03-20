import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "./api";
import { useLocation } from "react";

const updateUserForm = () => {
    // hooks

    const [userForm, setUserForm] = useState({

    })

    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user || {}; // recibe el objeto que trae el navigate

    // handler to submit

    // handler onChange
    return(
        <></>
    );
}

export default updateUserForm
