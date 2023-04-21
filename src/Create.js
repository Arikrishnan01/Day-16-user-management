import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './App.css';
import {API} from './Global';
import {useNavigate} from 'react-router-dom';


export default function Create (){
    const navigate = useNavigate(); 
    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    // const postDate = () => {
    //   userId = userId,
    //   firstName = firstName,
    //   lastName = lastName,
    //   phone = phone,
    //   city = city,
    //   state = state
    // };
    // fetch(`${API}`, {
    //     method: "POST",
    //     body: JSON.stringfy(postDate),
    //     header:{
    //       "Content-type":"application/json",
    //     },
    // })
    //   .then((data) => data.json())
    //   .then(() => navigate("/read"))

    return (
        <div className='create-form'>
            <TextField  id="outlined-basic"
              label="UserId"
              variant="outlined"
              placeholder='Enter UserId' 
              onChange={(e)=> setUserId(e.target.value)}
              value = {userId}
              />
            <TextField id="outlined-basic"
              label="FirstName"
              variant="outlined" 
              placeholder='Enter FirstName' 
              onChange={(e)=> setFirstName(e.target.value)}
              value = {firstName}
              />
            <TextField id="outlined-basic" 
              label="LastName" 
              variant="outlined" 
              placeholder='Enter LastName' 
              onChange={(e)=> setLastName(e.target.value)}
              value = {lastName}
              />
            <TextField id="outlined-basic" 
              label="Phone" 
              variant="outlined" 
              placeholder='Enter Phone'
              onChange={(e)=> setPhone(e.target.value)} 
              value = {phone} 
            />
            <TextField id="outlined-basic"
             label="City" 
             variant="outlined" 
             placeholder='Enter City'
             onChange={(e)=> setCity(e.target.value)}
             value = {city} 
            />
            <TextField id="outlined-basic"
             label="State" 
             variant="outlined" 
             placeholder='Enter State'
             onChange={(e)=> setState(e.target.value)}
             value = {state}
             />
            <Button 
              variant="contained"
              onClick ={() => {
                const newUser =  {
                  userId : userId,
                  firstName : firstName,
                  lastName : lastName,
                  phone : phone,
                  city : city,
                  state : state
                };
                fetch(`${API}`, {
                    method: "POST",
                    body: JSON.stringify(newUser),
                    headers:{
                      "Content-type":"application/json",
                    },
                })
                  .then((data) => data.json())
                  .then(() => navigate("/create"))
              }}
            >
            Add User</Button>
            <Button 
              className='back-btn'
              onClick={()=> navigate(-1)}
              variant="contained" startIcon={<ChevronLeftIcon/>}>
              Back
            </Button>
        </div>
    )
}
