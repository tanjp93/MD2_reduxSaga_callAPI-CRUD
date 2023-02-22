import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_delete_user, act_get_user } from '../redux/action';


const ListUser = () => {
    const distpatch=useDispatch();
    const navigate= useNavigate();
    const handleDelete=(e)=>{
        distpatch(act_delete_user(e))
    }  

      const handleEdit=(e)=>{

        localStorage.setItem("updateListUser", JSON.stringify(e))
        navigate('/updateUser')
    }
 
    useEffect(()=>{
        distpatch(act_get_user())
    },[]);
    let listUser =useSelector(state=>state.users);
    let elementListUser=listUser.map((ele,index)=>(
        <tr key={ele.id}>
                        <td>{index}</td>
                        <td>{ele.id}</td>
                        <td>{ele.email}</td>
                        <td>{ele.name}</td>
                        <td>{ele.age}</td>
                        <td><button onClick={()=>handleEdit(ele)}>EDIT</button> <button onClick={()=>handleDelete(ele.id)}>DEL</button></td>
                    </tr>
    ))
    return (
        <div>
            <h2>List Users</h2>
            <table border={"1"}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>User ID</th>
                        <th>Email</th>
                        <th>FullName</th>
                        <th>Age</th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {elementListUser}
                </tbody>
            </table>
            <button onClick={()=>navigate("/creatNewUser")}>Creat New User</button>
        </div>
    )
}

export default ListUser;
