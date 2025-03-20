import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "./api";

const createUserForm = () => {
// hook to manage form data
const [formData, setFormData] = useState({
    name : '',
    email : '',
    password : '',
    address : '',
});

const navigate = useNavigate();

// handler to submit data

const handleSubmit = async(e) => {
    try {
        // post request with axios/ arguments = url of post and Form data object.
        const response = await axios.post('url of POSTmapping(backend)', formData);
        alert();
        navigate('/users');

    } catch (error) {
        console.error(error);
    }
}

// handler to update form data : onChange

const handleChange = (e) => {
    // destructuring event (e) into name : value
    const{ name , value } = e.target;

    // create a new literal object and setting it
    setFormData({
        // desplegando el formData
        ...formData,
        // añadiendole el nuevo input
        [name] : value
    })

}
    return(
        <></>
    );
}

export default createUserForm