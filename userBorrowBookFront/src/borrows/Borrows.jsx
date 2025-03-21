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


const Borrows = () => {

  // we use [] because .map only works with arrays 
  const [borrows,setBorrows] = useState([]);

  const navigate = useNavigate();
  // fetch brrows
  useEffect(() => {

    const fetchBorrows = async () => {
      const response = await axios.get("url");
      setBorrows(response.data);
    }
  }, [])

 const createBorrow =  () => {

  navigate ('/borrows/create');
 }
  return (
    <>
      <h1>Borrow Management</h1>
      <Button onClick={createBorrow}>Create new Borrow</Button>

      {borrows.map((borrow) => (
        <div key={borrow.id}>
          <h3>{borrow.id}</h3>
          <p>{borrow.book.title}</p>
        </div>
      ))}
    </>
  );
};

export default Borrows;
