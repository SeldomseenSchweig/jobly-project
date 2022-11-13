import { Button } from 'bootstrap';
import React from 'react'
import { 
    Card,  
    CardBody, 
    CardTitle, 
    CardText,
    
} from 'reactstrap';
import '../Card.css'

const JobCard =({job})=>{


    return (

            <Card className='card'>
               
                    <CardBody>
                    <CardTitle>{job.title}</CardTitle>
                    
                    <CardText>
                        Equity: {job.equity}
                    </CardText>
                    <CardText>
                        Salary ${job.salary}
                    </CardText>
                  
                    </CardBody>
                    

            </Card>



    )
}
export default JobCard;