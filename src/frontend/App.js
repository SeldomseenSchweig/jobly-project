import React, {useEffect,useState} from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./navbar/NavBar";
import { Route, Switch } from "react-router-dom";
import Company from "./companies/Company";
import Companies from "./companies/Companies";
import Jobs from "./jobs/Jobs";
import SignupForm from "./SignupForm";
import JoblyApi from "../backend/api";
import LoginForm from "./LogInForm";
import ProfileEditForm from "./Profile";
import jwt from "jsonwebtoken";
import CurrentUserContext from "./CurrentUserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";
export const TOKEN_STORAGE_ID = "jobly-token";


function App() {

  const [currentUser, setCurrentUser] = useState("");
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

useEffect(() => {
  if(token && token.token){
    let info = jwt.decode(token.token)
    JoblyApi.token = token.token
    getUser(info.username);
    

  }

}
, [token]);

  async function register (values){
  let new_token = await JoblyApi.register(values);
  setToken(new_token)

}
async function login (values){
    let res = await JoblyApi.login(values);
    setToken(res)
    
}
async function getUser(username){
  let user = await JoblyApi.getUser(username);
  setCurrentUser(user)
}

function logout() {
  
  setCurrentUser(null);
  setToken(null);
  
}


  return (
    <div className="App">
      <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <NavBar logout={logout}/>
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
              <SignupForm register={register}/>
            </Route>
            <Route exact path="/login">
              <LoginForm login={login}/>
            </Route>
            
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
        </CurrentUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;