import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import JoblyApi from '../../frontend/api';
import JobCard from "./CompanyJobCard.js"

const Company = () =>{
    let {handle} = useParams();

    const [company, setCompany] = useState([]);


    useEffect(() => {


        async function getCompany() {
                let company = await JoblyApi.getCompany(handle);
                setCompany(company);    


            
        
        }

        getCompany();

      }, []);
      if(company.jobs===undefined){
          company.jobs = ['hired']
      }
      


    return (
        <>
        <h2>{company.name}</h2>
        <h3>{company.description}</h3>
                 { company.jobs.map(job => (
                <div>
                    {/* <h3>{job.title}</h3>
                    <h4>{job.salary}</h4>
                    <h4>{job.equity}</h4> */}
                    <JobCard job={job} />

                </div>
                
            ))}
        </>

        
    )



}

export default Company;