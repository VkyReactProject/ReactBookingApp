import React from 'react'
import './packageDetails.bookSlot.component.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Fa5, FaIndianRupeeSign } from "react-icons/fa6";


const PackageDetailsBookSlot = ({desc}) => {
  return (
    <div className='PackageDetailsBookSlot-Container'>
         <Card className='Card-Header-Package'>
        <Card.Body className='Card-Header-Package-Body'> 
        <Card.Text>
        <FaIndianRupeeSign />{desc}
      
        </Card.Text>
                 
       
         
        <Button className = "btn" variant="primary" size="lg">
          Book Slot
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PackageDetailsBookSlot;
