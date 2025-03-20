import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import axios from "./api";
import { useNavigate } from 'react-router-dom';
import createUserForm from "./CreateUserForm";


const Users = () => {
// hook to manage users state
const [users,setUsers] = useState([]);

const navigate = useNavigate();


// handler to get users from api

const getUsers = async () => {
  try{
  const response = await axios.get("/users"); // axios instance
  const data =  response.json();
  setUsers(data);}

  catch (error){
    console.error(error);
  }

};
// Calls getUsers every time we render the page
useEffect(() => {
  getUsers();
}, []);

// handler to delete user

const deleteUser = async (id) => {
  try {
    await axios.delete('/users/${id}');
    alert("User deleted successfully");
    // fetch users after deleting the user
    // refreshing the page
    getUsers();
  } catch (error) {
    console.error(error);
  }
}

// navigate for create

const createUser = () => {

  navigate('/users/create');
}

// navigate for update

const updateUser = (user) => {
  // sends a literal object = state : user
  navigate('/users/update/${user.id}' , {state: {user}});
}

// Structure to render : Container(Paper) -> One box for spacing(Box) -> One for grid(Box2)
  return(
    <>
      <Paper sx={{ padding: "16px"}}>
        <Button variant = 'contained' onClick={createUserForm}>Create User</Button>
      <Box display="grid" gridTemplateColumns="repear(12, 1fr)" gap={2}></Box>
      <Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4"}}></Box>
      <Card>
      <CardContent>
          
      </CardContent>
      </Card>
      </Paper>
    
    </>

  );

}

export default users