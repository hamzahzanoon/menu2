import React , {useState} from 'react'
import {Navbar , NavDropdown , Nav , Form , Container , Button , Row} from 'react-bootstrap';
import "./Navbar.css"

const Navbars = ({filterSearch}) => {
  const [searchValue, setSearchValue] = useState()

  const onSearch = () => {
    filterSearch(searchValue)
    setSearchValue("")
  }
  return (
       <Row className="n-navbar">


           <Navbar bg="light" expand="lg">
             <Container>
               <Navbar.Brand className='n-name' href="#">مطعم الجود</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                 <Nav
                   className="me-auto my-2 my-lg-0"
                   style={{ maxHeight: '100px' }}
                   navbarScroll
                 >
                     <NavDropdown.Divider />
                 </Nav>
                 <Form className="d-flex">
                   <Form.Control
                     type="search"
                     placeholder="البحث ... "
                     className="mx-2"
                     onChange={(e) => setSearchValue(e.target.value)}
                     value={searchValue}
                   />
                   <Button onClick={() => onSearch()} variant="outline-success">البحث</Button>
                 </Form>
               </Navbar.Collapse>
             </Container>
           </Navbar>

       </Row>
  )
}

export default Navbars