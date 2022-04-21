import React from 'react';

const Home = () => {
    const handleAddUser=e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user={name,email}
        fetch('http://localhost:5000/user',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div>
            <h2>Please add new user</h2>
            <form onSubmit={handleAddUser} >
                <input type="text" name='name' placeholder="Name" required/> <br/>
                <input type="email" name='email' placeholder="Email" required/><br/>
                <input type="submit" value="Add user"/>
            </form>
        </div>
    );
};

export default Home;