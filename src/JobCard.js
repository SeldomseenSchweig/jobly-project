import React from 'react'
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardTitle, 
    CardText,
    CardSubtitle
} from 'reactstrap';
import './Card.css'

const JobCard =({job})=>{
    console.log(job.title)


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