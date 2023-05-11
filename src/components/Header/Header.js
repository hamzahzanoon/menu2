import React from 'react';
import {Row , Col} from 'react-bootstrap';
import "./Header.css";

const Header = () => {
  return (
    <Row>
     <Col sm="12" className="h-name">
      <div> 
       <h2>قائمة الطعام</h2>
       <p></p>
      </div>
     </Col>
    </Row>
  )
}

export default Header