import React, {useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom';
import JoblyApi from "./backend/api";





const ListItems = () => {



    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [companies, setCompanies] = useState([]);
  
    useEffect(() => {
      async function getJobs() {
        let jobs = await JoblyApi.getJobs();
        setJobs(jobs);
        setIsLoading(false);
      }
      async function getCompanies() {
        let companies = await JoblyApi.getCompanies();
        setCompanies(companies);
        setIsLoading(false);
      }
      getCompanies();
      getJobs()
    }, []);



    return(

        <ul>
            <li> company name</li>
            <li> Fake Words</li>
        </ul>
    )



} 

export default ListItems;