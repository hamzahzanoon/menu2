import React from 'react';
import {Row , Col} from 'react-bootstrap';
import "./Categry.css";


const Categry = ({filterByCatgery , allCatgery}) => {

  const onFilter = (foods) => {
    filterByCatgery(foods)
  }


  return (
    <Row className='mb-4'>
    <Col sm="12" className='d-flex justify-content-center'>
      {
        allCatgery.length >= 1 ? (allCatgery.map((item) => {
          return (
            <div>
            <button onClick={() => onFilter(item)} style={{border:"2px solid green" , transition:"0.5s"}} className='btn mx-2'>{item}</button>
           </div>
          )
        })) : <h4> لا يوجد اصناف </h4>
      }
   
    </Col>
   </Row>
  )
}

export default Categry