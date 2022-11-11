import React, {useContext} from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import JoblyApi from "../backend/api";
import CurrentUserContext from "./CurrentUserContext";
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
  const user = useContext(CurrentUserContext);
  console.log(JoblyApi.token)
 
    return (
      <section className="col-md-14">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              
              <h1 className="font-weight-bold">
                  Jobly
              </h1>
              <h3> All the jobs in one, convenient place. </h3> 
              { user? <h2> Welcome Back {user.user.username} </h2>:<h2></h2>}
  
            </CardTitle>
           
            <Link to="/signup"> <button  class="btn btn-primary b"> Sign Up</button></Link>
          
            <Link to="/login">  <button  class="btn btn-primary b"> Login</button></Link>
          
          </CardBody>
        </Card>
      </section>
    );

  }



export default Home;