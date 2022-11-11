import React from 'react'
import { 
    Card, 
    CardHeader, 
    CardBody,  
    CardText 
} from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const CompanyCard = ({company}) =>{

return (
<>
    <Link exact to={`/companies/${company.handle}`}>
    
    
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
        {company.name}     

    </CardHeader>
    <CardBody>

        <CardText>
        {company.description}
        </CardText>
        
    </CardBody>
    </Card>
    
    </Link>


</>

)



}

export default CompanyCard;