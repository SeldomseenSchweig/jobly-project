import React, {useState, useEffect,useContext  } from 'react'
import JoblyApi from '../backend/api'
import CompanyCard from './CompanyCard';
import CurrentUserContext from './CurrentUserContext';
import SearchBar from './SearchBar';
import { Redirect } from 'react-router-dom';





const Companies = () => {
    let user = useContext(CurrentUserContext)

    if(!user){
        return <Redirect to="/"/>
    }

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
        console.log(typeof(name))
        let new_companies = await JoblyApi.getCompanies(name);
        
        setCompanies(new_companies);
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