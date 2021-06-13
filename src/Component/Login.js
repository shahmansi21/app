import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Features/userSlice';
import  '../style.css';
const Login = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("Name",name);
        console.log("Password",password);

        let regex = new RegExp("[a-zA-Z ]+[a-zA-Z]$");
        var regexPass = new RegExp('[a-zA-Z]');

        console.log("password length",password.length);
        let length = password.length;

        if(name === '')
        {
            alert("Please Enter Name");
            return;
        }
        if(name != '' && !regex.test(name))
        {
            alert('Only Alphabates are allowed');
            return;
        }
        if(password === '')
        {
            alert("Please Enter Password");
            return;
        }
        if( password.length > 8)
        {
            alert("Only Eight characters are allowed");
            return;
        }
        if(password != '' && !regexPass.test(password))  
        {
            alert("Spaces and Number are not allowed");
            return;
        }


        dispatch(login({
            name : name,
            password : password,
            isLoggedIn : true
        }))
    };
    return(
        <div className="main">
            
            <form onSubmit ={(e) => handleSubmit(e)}>
            <h1 className="title">Welcome to the Portal</h1>
                <h1>
                    Name
                </h1>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br></br>
                <h1>
                    Password
                </h1>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                <button type="submit" className="btn-style">Submit</button>
            </form>
        </div>
    )
}
export default Login;
