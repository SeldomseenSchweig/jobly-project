import React, {useContext} from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import CurrentUserContext from "./CurrentUserContext";

function Home() {
  const user = useContext(CurrentUserContext);
  let i = 0
  console.log(user, i+1)
 
    return (
      <section className="col-md-8">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              
              <h1 className="font-weight-bold">
                  Jobly
              </h1>
              <h3> All the jobs in one, convenient place. </h3> 
              <h2> Welcome Back, </h2>
  
            </CardTitle>
          </CardBody>
        </Card>
      </section>
    );

  }



export default Home;