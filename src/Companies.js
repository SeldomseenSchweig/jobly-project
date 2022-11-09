import React, {useState, useEffect, } from 'react'
import JoblyApi from './backend/api'

import { Redirect } from 'react-router-dom';
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardTitle, 
    CardText 
} from 'reactstrap';





const Companies = () => {

    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getCompanies() {
          let companies = await JoblyApi.getCompanies();
          setCompanies(companies);
          setIsLoading(false);
        }

        getCompanies();
      }, []);


    let compsList = Object.values(companies)

    if (compsList.length == 0){
        return <Redirect to="/"/>
    }else{

    

    return (

        
        <div>
            <h1>{title}</h1>
            { compsList.map(item => (
                <div>
                <Card
                    className="my-2"
                    color="primary"
                    outline
                    style={{
                    color:"red" ,
                    borderColor:"black",
                    borderWidth:"medium",
                    borderStyle:'solid',
                    width: "50%",
                    margin:" 0 auto"}}>
                <CardHeader>
            {item.name}     

                </CardHeader>
                <CardBody>

                    <CardText>
                    {item.description}
                    </CardText>
                </CardBody>
                </Card>
                </div>
                
            ))}
            </div>


        )
            }
} 

export default Companies;