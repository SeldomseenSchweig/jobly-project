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
import SearchBar from './SearchBar';





const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        async function getJobs() {
            try {
                let jobs = await JoblyApi.getJobs();
                setJobs(jobs);    
            } catch (error) {
                console.log(error)
                
            }

            
        
        }
        setIsLoading(false);
        getJobs();

      }, [jobs]);

    let jobList = Object.values(jobs)

   


    return (

        
        <div>
            <SearchBar setJobs/>
            { jobList.map(job => (
            
                < Card 
                    className="my-2"
                    color="primary"
                    outline
                    style={{
                    color:"red" ,
                    borderColor:"black",
                    borderWidth:"medium",
                    borderStyle:'solid',
                    width: "50%",
                    margin:" 10px "}}>
                <CardHeader>
                    {job.title}     

                </CardHeader>
                <CardBody>
                
                    {job.equity ? <CardText> Equity: {job.equity}</CardText>: ""}
                   

                    { job.salary ? <CardText> Salary: ${job.salary}</CardText> : ''}
                    
                    
                </CardBody>
                </Card>
                
                
            ))}
            </div>


        )
            
} 

export default Jobs;