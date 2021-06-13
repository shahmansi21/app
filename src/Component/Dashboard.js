import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Features/userSlice";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import loader from '../Loader.gif';
<script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>



const Dashboard = () => {
    const user = useSelector(selectUser);
    const[newArray,setNewArray] = useState([]);
    const dispatch = useDispatch();
    
    const [text,setText] = useState("");



    if(user === '')
    {
        <Login/>
    }


    

    const [{data,loading,error,response},refetch] = useAxios({
        method : 'GET',
        url : 'https://official-joke-api.appspot.com/jokes/ten',
    });


    useEffect(() => {
        if (data)
        {
            let jokeArray1 = [];

            setNewArray(data);

            console.log("before",newArray);

            data.map((jokeData => newArray.push({
                "id" : jokeData.id,
                "type" : jokeData.type,
                "setup" : jokeData.setup,
                "punchline":jokeData.punchline
            })));
            console.log("Joke Array",jokeArray1);
        //    setNewArray(newArray);
            console.log("After",newArray);
        }
        else if(error)
        {
            setText(error.message);
        }
    },[data,error]);






    console.log("Axios",data,loading,error,response);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());

    };
    return(
        <div>
            <div className="header-menu">
                <h1 className="title-s">Jokes</h1>
                <h5>Welcome <span>{user.name}</span></h5>
                <button type="submit" className="logout-btn-style" onClick={ (e) => handleLogout(e)} >Logout</button> 
            </div>
         {loading ? <img className="loader" src={loader}></img> : 
         
         
         <div>

                <div className="container">
                  
                <div className="row" data-masonry='{"percentPosition": true }'>

                    {newArray.length != 0 ? 
                    
                    newArray.map( cal => 
                        
                        <div className="col-sm-3 col-ls-4">
                        <div className="card" >
                            <div className="card-body">
                                <p className="card-text">{cal.setup}</p>
                                <h6 className="fst-italic card-title "><span>{cal.punchline}</span></h6>
                                {/* <a href="#" class="btn btn-primary">general</a> */}
                            </div>
                        </div>
                    </div>
                    )
                    
                    :'No Jokes Found'}
                                     
                </div>
                </div>
            </div>
         }
         </div>
    )
}
export default Dashboard;