import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Features/userSlice';
const Login = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name : name,
            password : password,
            isLoggedIn : true
        }))
    };
    return(
        <div>
            <form onSubmit ={(e) => handleSubmit(e)}>
                <h1>
                    Name
                </h1>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br></br>
                <h1>
                    Password
                </h1>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default Login;