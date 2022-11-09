import React, {useState, useEffect, } from 'react'
import { Redirect } from 'react-router-dom';
import JoblyApi from './backend/api'

import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardTitle, 
    CardText 
} from 'reactstrap';





const Jobs = () => {
    const [jobs, setJobs] = useState([]);


    useEffect(() => {

        async function getJobs() {
          let jobs = await JoblyApi.getJobs();
          setJobs(jobs);
          setIsLoading(false);
        }
        getJobs()
      }, []);

    let jobList = Object.values(jobs)

    if (jobList.length == 0){
        return <Redirect to="/"/>
    }else{

    

    return (

        
        <div>
            <h1>{title}</h1>
            { jobList.map(item => (
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
            { item.title }     

                </CardHeader>
                <CardBody>

                    <CardText>
                    {item.equity}
                    </CardText>
                </CardBody>
                </Card>
                </div>
                
            ))}
            </div>


        )
            }
} 

export default Jobs;