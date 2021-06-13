import { useSelector } from "react-redux";
import Login from "./Component/Login";
import DashBoard from "./Component/Dashboard";
import { selectUser } from "./Features/userSlice";
import { BrowserRouter as Router, Route , Switch , Link} from "react-router-dom";

const  App = () => {

  const user = useSelector(selectUser);
  
  return (
    <div>
      {/* <Router>
      <Switch>
          <Route exact path="/">
              <Login/>
          </Route>
          <Route exact path ="/Dashboard">
            <DashBoard/>
          </Route>
      </Switch>
      </Router> */}
      {user ? <DashBoard/> : <Login/>}
      </div>
  );
}

export default App;
