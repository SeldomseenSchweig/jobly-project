import React, {useState, useEffect,useContext } from 'react'
import JoblyApi from '../backend/api'
import { Redirect } from 'react-router-dom';
import CurrentUserContext from "./CurrentUserContext";


import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardText 
} from 'reactstrap';
import SearchBar from './SearchBar';





const Jobs = () => {
    const user = useContext(CurrentUserContext)
    
    if(!user){
        return <Redirect to="/"/>
    }
    const [jobs, setJobs] = useState([]);


    useEffect(() => {

        async function getJobs() {
            try {
                let jobs = await JoblyApi.getJobs();
                setJobs(jobs);    
            } catch (error) {
                console.log(error)
                
            }

            
        
        }
        getJobs();

      }, []);

    let jobList = Object.values(jobs)
    async function search(name) {
        let jobs = await JoblyApi.getJobs(name);
        setJobs(jobs);
        }



    return (

        
        <div>
            <SearchBar search={search} />
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