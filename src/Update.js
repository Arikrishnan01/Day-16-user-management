import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from './Global';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Update() {

  const {userid} = useParams();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    fetch(`${API}/${userid}`,{
        method: "GET"
    })
    .then((data) => data.json())
    .then((bk) => {
      setUserId(bk.userId)
      setFirstName(bk.firstName)
      setLastName(bk.lastName)
      setPhone(bk.phone)
      setCity(bk.city)
      setState(bk.state)
    })
},[]); 

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
    type="submit"
    color="success"
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
      fetch(`${API}/${userid}`, {
          method: "PUT",
          body: JSON.stringify(newUser),
          headers:{
            "Content-type":"application/json",
          },
      })
        .then((data) => data.json())
        .then((data) => console.log(data))
        navigate('/')
    }}
    >Update User</Button>
    <Button 
        className='back-btn'
        onClick={()=> navigate(-1)}
        variant="contained" startIcon={<ChevronLeftIcon/>}>
        Back
    </Button>
</div>
  )
}





// import './App.css';
// import React from 'react';
// import { useState,useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import {useParams} from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { API } from './Global';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// export default function Update({props, data}) {

//   // const { usersid } = useParams(); //{ bookList }
//   const [user,setUser]=useState(null);
//   useEffect(()=>{
//     fetch(`${API}/${data.id}`,{
//       method:"GET"
//     })
//     .then((res)=> res.json())
//     .then((bk)=> setUser(bk))
//   },[]);
//   return user ? <UpdateForm user={user}/> :"Loading...";
// }  

// function UpdateForm({user}){

//   // const {id} = useParams();
//   const navigate = useNavigate();
//   const [userId, setUserId] = useState(user.userId);
//   const [firstName, setFirstName] = useState(user.firstName);
//   const [lastName, setLastName] = useState(user.lastName);
//   const [phone, setPhone] = useState(user.phone);
//   const [city, setCity] = useState(user.city);
//   const [state, setState] = useState(user.state);

//   return (
//     <div className='create-form'>
//     <TextField  id="outlined-basic"
//       label="UserId"
//       variant="outlined"
//       placeholder='Enter UserId' 
//       onChange={(e)=> setUserId(e.target.value)}
//       value = {userId}
//       />
//     <TextField id="outlined-basic"
//       label="FirstName"
//       variant="outlined" 
//       placeholder='Enter FirstName' 
//       onChange={(e)=> setFirstName(e.target.value)}
//       value = {firstName}
//       />
//     <TextField id="outlined-basic" 
//       label="LastName" 
//       variant="outlined" 
//       placeholder='Enter LastName' 
//       onChange={(e)=> setLastName(e.target.value)}
//       value = {lastName}
//       />
//     <TextField id="outlined-basic" 
//       label="Phone" 
//       variant="outlined" 
//       placeholder='Enter Phone'
//       onChange={(e)=> setPhone(e.target.value)} 
//       value = {phone} 
//     />
//     <TextField id="outlined-basic"
//      label="City" 
//      variant="outlined" 
//      placeholder='Enter City'
//      onChange={(e)=> setCity(e.target.value)}
//      value = {city} 
//     />
//     <TextField id="outlined-basic"
//      label="State" 
//      variant="outlined" 
//      placeholder='Enter State'
//      onChange={(e)=> setState(e.target.value)}
//      value = {state}
//      />
//     <Button 
//     type="submit"
//     color="success"
//     variant="contained"
//     onClick ={() => {
//       const newUser =  {
//         userId : userId,
//         firstName : firstName,
//         lastName : lastName,
//         phone : phone,
//         city : city,
//         state : state
//       };
//       fetch(`${API}/${user.id}`, {
//           method: "PUT",
//           body: JSON.stringify(newUser),
//           headers:{
//             "Content-type":"application/json",
//           },
//       })
//         .then((data) => data.json())
//         // .then(() => navigate("/"))
//     }}
//     >Update User</Button>
//     <Button 
//         className='back-btn'
//         onClick={()=> navigate(-1)}
//         variant="contained" startIcon={<ChevronLeftIcon/>}>
//         Back
//     </Button>
// </div>
//   )
// }

