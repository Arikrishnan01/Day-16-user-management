import React from 'react'
import './App.css';
import Button from '@mui/material/Button';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {API} from './Global';

export default function Read() {
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState([]);
  

  useEffect(()=>{
    fetch(`${API}`,{
      method:"GET"
    })
      .then((res) => res.json())
      .then((users) => setAllUser(users))
  }, []);

  return (
    <div>
          <Button 
            className='.add-user-btn'
            onClick={()=> navigate("/create")}
            variant="contained">
            Add User
        </Button>
      <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>UserId</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LstName</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {allUser.map((data)=> (
                    <TableRow>
                      <TableCell>{data.userId}</TableCell>
                      <TableCell>{data.firstName}</TableCell>
                      <TableCell>{data.lastName}</TableCell>
                      <TableCell>{data.phone}</TableCell>
                      <TableCell>{data.city}</TableCell>
                      <TableCell>{data.state}</TableCell>
                      <TableCell>
                        <Button 
                        color="secondary"
                        variant="contained"
                        onClick ={() => navigate(`/update/${data.id}`)}>Update</Button>
                      </TableCell>
                      <TableCell>
                        <Button 
                        color="error"
                        variant="contained"
                        onClick = {()=> {
                           fetch(`${API}/${data.id}`,{
                            method: "DELETE"
                          })
                          .then(response => {  alert(response.status); });
                       }}
                        >Delete</Button>
                      </TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
      </TableContainer>
    </div>
  )
}

