import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { act_patch_user } from '../redux/action';
import { useEffect } from 'react';

const UpdateUser = () => {

    const navigate = useNavigate()
    const [email, setUpdateEmail] = useState('')
    const [name, setUpdateFullname] = useState('')
    const [age, setUpdateAge] = useState('')
    const [id, setUpdateId] = useState('')

    useEffect(() => {
        let listUserUpdate = JSON.parse(localStorage.getItem("updateListUser"))
        setUpdateEmail(listUserUpdate.email)
        setUpdateFullname(listUserUpdate.name)
        setUpdateAge(listUserUpdate.age)
        setUpdateId(listUserUpdate.id)
    }, [])

    const distpatch = useDispatch()
    const handleUpdate = () => {
        distpatch(act_patch_user({ email, name, age ,id}))
        navigate('/')
    }


    return (
        <div>
            <h2>Update User</h2>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' value={email} onChange={(e) => setUpdateEmail(e.target.value)} /><br />
            <label htmlFor='fullname'>Full Name</label>
            <input id='fullname' name='fullname' value={name} onChange={(e) => setUpdateFullname(e.target.value)} /><br />
            <label htmlFor='age'>Age</label>
            <input id='age' name='age' value={age} onChange={(e) => setUpdateAge(e.target.value)} /><br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default UpdateUser;