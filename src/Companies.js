import React, {useState, useEffect, } from 'react'
import JoblyApi from './backend/api'


import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';





const Companies = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getCompanies() {
          let companies = await JoblyApi.getCompanies();
          setCompanies(companies);
        }

        getCompanies();
      }, []);


    let compsList = Object.values(companies)

    async function search(name) {
        console.log(name)
        let companies = await JoblyApi.getCompanies(name);
        console.log(companies)
        setCompanies(companies);
        }

 

    

    return (

        
        <div>
            <SearchBar search={search}/>
            <table>
                <tbody>
            { compsList.map(company => (
                <tr>
                <CompanyCard company={company}/>
                </tr>
                
            ))}
             </tbody>
            </table>
            </div>


        )
            
} 

export default Companies;