import React, {useContext, useState, useEffect} from 'react'
import CurrentUserContext from '../CurrentUserContext';
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardText 
} from 'reactstrap';



const JobCard = ({values}) =>{

    const {apply, hasAppliedToJob} = useContext(CurrentUserContext)
    const [applied, setApplied] = useState(hasAppliedToJob(values.id));
    


    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (hasAppliedToJob(e.target.id)) return;
        apply(e.target.id);
        setApplied(true);
         
    }



            return(

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
                                {values.title}     

                            </CardHeader>
                            <CardBody>
                            
                                {values.equity ? <CardText> Equity: {values.equity}</CardText>: ""}
                            

                                { values.salary ? <CardText> Salary: ${values.salary} </CardText> : ''}
                                
                                
                            </CardBody>
                            <form id={values.id} onSubmit={handleSubmit}>
                            <button disabled={applied}  className='btn btn-sm btn-primary'> Apply</button>
                            </form>
                            
                            </Card>



            )
        }

        export default JobCard;