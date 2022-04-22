import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id}=useParams()
    const [user,setUser]=useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/user/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    const handleUpdateUser=e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const UpdateUser={name,email}
        fetch(`http://localhost:5000/user/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateUser)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        alert('Successfully Add user')
        e.target.reset()
    }
    return (
        <div>
            <h3>UpdateUser id:{user.name}</h3>
            <form onSubmit={handleUpdateUser} >
                <input type="text" name='name' placeholder="Name" required/> <br/>
                <input type="email" name='email' placeholder="Email" required/><br/>
                <input type="submit" value="Update user"/>
            </form>
        </div>
    );
};

export default UpdateUser;