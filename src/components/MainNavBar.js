import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo-air-india.png';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import indianFlag from '../images/ind-flag.png';
import InputGroup from 'react-bootstrap/InputGroup'
import {FaSearch} from 'react-icons/fa'


const MainNavBar = () => {
  return (
    <>
      <Navbar expand='lg' className='customNav'>
        <Container className='container '>
          <a href='/' className='logo'>
            <img src={logo} alt="Air India Logo" className='m-4 mt-4' />
          </a>


          <div className='w-100'>
            <div className='d-flex justify-content-start align-items-center mt-2'>
              <h5>Toll Number</h5>
              <Form.Select aria-label="Default select example" className='ms-3 w-50'>
                <option>Contact Us </option>
                <option value="1">For calls when in India : 1860 / 0124-2641407 / 0124-2641407</option>
                <option value="2">For calls when in India : 1860 / 0124-2641407 </option>
                <option value="3">For calls when in India : 1860 </option>
              </Form.Select>

              <Dropdown className='ms-2'>
                <Dropdown.Toggle id="dropdown-basic">
                  <img src={indianFlag} alt="Indian Flag" style={{width: "30px"}} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div className='ms-1'>
                - EN
              </div>

              <InputGroup className="w-25 ms-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2" className='bg-primary border-primary text-white'><FaSearch /></InputGroup.Text>
              </InputGroup>
            </div>

            <div>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                  <Nav.Link href="/" active>Home</Nav.Link>
                  <Nav.Link href="/about">Manage Your Trip</Nav.Link>
                  <Nav.Link href="/completed-projects">Special Offers</Nav.Link>
                  <Nav.Link href="/ongoing-projects">Travel Information</Nav.Link>
                  <Nav.Link href="/contact-us">Flying Returns</Nav.Link>
                  <Nav.Link href="/contact-us">Baggage</Nav.Link>
                  <Nav.Link href="/contact-us">Flying Returns</Nav.Link>
                  <Nav.Link href="/contact-us">Flying Returns</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
 
export default MainNavBar;