import React, {useEffect,useState} from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Company from "./Company";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Signup from "./Signup";
import JoblyApi from "../backend/api";
import LoginForm from "./LogInForm";
import ProfileEditForm from "./ProfileEditForm";


function App() {

  const [user, setUser] = useState({});
  const [token,setToken] = useState({})

useEffect(() => {
  localStorage.setItem('token', JSON.stringify(token));
}, []);

  async function register (values){
  let token = await JoblyApi.register(values);

}
async function login (values){
   await JoblyApi.login(values);
  // console.log(token);

}


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/companies">
              <Companies  />
            </Route>
            <Route path="/companies/:handle">
              <Company cantFind="/companies" />
            </Route>
            <Route exact path="/jobs">
              <Jobs />
            </Route>
            <Route exact path="/profile">
              <ProfileEditForm />
            </Route>
            <Route exact path="/signup">
              <Signup register={register}/>
            </Route>
            <Route exact path="/login">
              <LoginForm login={login}/>
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;