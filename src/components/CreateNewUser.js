import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_post_user } from '../redux/action';
import { useNavigate } from 'react-router-dom';


const CreateNewUser = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [fullname, setFullname] = useState()
    const [age, setAge] = useState()
    const distpatch=useDispatch()

    const handleCreate = () => {
        let action={email,password,fullname,age}
        distpatch(act_post_user(action))
        
        navigate('/')
    }

    return (
        <div>
            <h2>Create New User</h2>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' onChange={(e) => setEmail(e.target.value)} /><br />
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' onChange={(e) => setPassword(e.target.value)} /><br />
            <label htmlFor='fullname'>Full Name</label>
            <input id='fullname' name='fullname' onChange={(e) => setFullname(e.target.value)} /><br />
            <label htmlFor='age'>Age</label>
            <input id='age' name='age' onChange={(e) => setAge(e.target.value)} /><br />
            <button onClick={handleCreate}>Create</button>
        </div>
    );
}

export default CreateNewUser;
