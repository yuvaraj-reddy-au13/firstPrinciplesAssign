// import React from "react";
// import { Navbar,Container, Nav  } from 'react-bootstrap';

// import './header.css'

// import { Link } from 'react-scroll'

// // import { Bounce } from 'react-reveal'



// const Header = () => {
//     return (
//         <div>
//             <Navbar bg="primary" expand="lg" variant="dark" className='navBar-wrapper '>
//                 <Container>
//                     <Navbar.Brand href="#home" className='navTitle'>Yuvaraj Reddy</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav white" variant='light'>
//                         <Nav className="ms-auto ">
                           
//                            <div className ='navbar-links'  >
//                             <Link to='home' ><Nav.Link className="m-3 navLink" href="#link"  > HOME </Nav.Link></Link>
//                             <Link to='aboutme' ><Nav.Link className="m-3 navLink" href="#link2" > SERVICES  </Nav.Link></Link>
//                             <Link to='services' ><Nav.Link className="m-3 navLink" href="#link" > PRICING </Nav.Link></Link>
//                             <Link to='portfolio' ><Nav.Link className="m-3 navLink" href="#link" > TESTIMONIAL </Nav.Link></Link>
//                             <Link to='contactme' ><Nav.Link className="m-3 navLink" href="#link" > CONTACT </Nav.Link></Link>
//                             </div>

//                             <div className ='navbar-icons'>
//                             <h5>FOLLOW US</h5>
//                             <i class="fab fa-2x fa-facebook-f"></i>
//                             <i class="fab fa-2x fa-twitter"></i>
//                             <i class="fab fa-2x fa-instagram"></i>
//                             <i class="fab fa-2x fa-linkedin"></i>
//                             </div>
                            
                            
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     );
// };


// export default Header;


import React from 'react'
import logo from '../../images/logo.png';
import './header.css';

import { Link } from 'react-scroll'


import { Container, Navbar, Nav, Image, Button } from 'react-bootstrap'

import HeaderBG from '../../images/header-bg.jpg'


const Header = () => {

    return (

        <div id='home' className='headerWrapper'>
            <div className='headerContentWrapper'>
            <div className='headerContent'>
            {/* <Container > */}
            
            <Navbar  className='navbar' expand='lg' variant="light" fixed="top" >
    
                        <Navbar.Brand href="/"><Image src={logo} className="App-logo" alt="logo" fluid /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav white" variant='light'>
                    
                        <Nav className="me-auto headerLinks">
                            <Link to='home'><Nav.Link href="/" className='Link'><h6> <strong>HOME</strong></h6></Nav.Link></Link>
                            <Link to='services' ><Nav.Link href="/" className='Link' > <h6> <strong> SERVICES </strong> </h6> </Nav.Link> </Link>
                            <Link to='pricing' ><Nav.Link href="#pricing" className='/'> <h6> <strong> PRICING </strong> </h6> </Nav.Link> </Link>
                            <Link to='testimonial' ><Nav.Link href="#testimonial" className='/' > <h6> <strong> TESTIMONIAL </strong> </h6> </Nav.Link></Link>
                            <Link to='contact' ><Nav.Link href="#contact" className='/' > <h6> <strong> CONTACT </strong> </h6></Nav.Link> </Link>

                        <div className = 'navbar-socialIcons'>
                        <h5>FOLLOW US</h5>
                        <i class="fab fa-2x fa-facebook-f"></i>
                        <i class="fab fa-2x fa-twitter"></i>
                        <i class="fab fa-2x fa-instagram"></i>
                        <i class="fab fa-2x fa-linkedin"></i>
                        </div>
                        </Nav>
                        
                        
                 

                    

                </Navbar.Collapse>
            </Navbar>

            
            {/* </Container> */}
            
            
            
            
            </div>


            <div className='textContent'>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Handcrafted Landing Page for Startups and SaaS Businesses</h1>
                <p style={{textOverflow:'wrap'}}>A simple, customizable, and, beautiful SaaS business focused landing page 
                 to make your project closer to launch!</p>

                <div classsName ='header-btn' style={{display:'flex', flexDirection:'row', margin : '5%'}} >
                    <a className ='btn1-grad'><h6> Get In Touch </h6> </a>
                    <a className ='btn2'><h6> watch the video <i className="fas fa-play play-btn"></i> </h6> </a>
                </div>
            </div>

            </div>


        </div>
                
    )
}

export default Header

