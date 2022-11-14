import React, {useState, useEffect,useContext } from 'react'
import JoblyApi from '../api'
import { Redirect } from 'react-router-dom';
import CurrentUserContext from "../CurrentUserContext";


import SearchBar from '../SearchBar';
import JobCard from './JobCard';





const Jobs = () => {

    const {currentUser} = useContext(CurrentUserContext)
    


  


    
    if(!currentUser){
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
            
                
                <JobCard values={{
                    id:job.id,
                    companyName:job.companyName,
                    equity:job.equity,
                    salary:job.salary,
                    title:job.title  }}/>
                
            ))}
            </div>


        )
            
} 

export default Jobs;