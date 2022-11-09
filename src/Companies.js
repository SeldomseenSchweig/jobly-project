import React, {useState, useEffect, } from 'react'
import { Row } from 'reactstrap';
import JoblyApi from './backend/api'


import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';





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
      }, [companies]);


    let compsList = Object.values(companies)

 

    

    return (

        
        <div>
            <SearchBar setCompanies={setCompanies}/>
            <table>
            { compsList.map(company => (
                <tr>
                <CompanyCard company={company}/>
                </tr>

                
            ))}


            </table>
            

            </div>


        )
            
} 

export default Companies;