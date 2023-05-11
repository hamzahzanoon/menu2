import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Fade from 'react-reveal/Fade';


function GridExample({itemData}) {
  return (
    <Row xs={1} md={3} className="g-4">
     <Fade bottom>
      {itemData.length >=1 ? (itemData.map((item) => {
        return (
            <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.Image} style={{height: "300px"}} />
              <Card.Body>
               <div className='d-flex justify-content-between'>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title style={{color: "green"}}>{item.price}</Card.Title>
               </div>
                <Card.Text>
                 {item.desc} 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })) : <h4> لا يوجد اصناف من الطعام </h4>
     }
     </Fade>
    </Row>
  );
}

export default GridExample;