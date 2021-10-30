import React from 'react';
import { Card, Button , Col} from 'react-bootstrap'

import './pricing.css' 

const Pricing = () => {
    return (
        <div id='pricing' style ={{textAlign:'center', marginBottom : '30px'}} className='pricingWrapper col-lg-10 col-sm-1'>
            <h1>Our Pricing</h1>
            <h6>Stop wasting time and money designing and managing a</h6>
            <h6 style={{marginTop : "-8px", marginBottom:'40px'}}>website that doesn’t get results. Happiness guaranteed!</h6>


            <div className='cardsection'>
                {/* <> */}
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <h3>Basic</h3>

                    <Card.Body>
                        <h1> $ 199</h1>

                        <Card.Text>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Carefully crafted components</div>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Amazing page examples </div>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Super friendly support team </div>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Awesome Support </div>
                        </Card.Text>
                        <Button variant="primary">Get Started</Button>
                    </Card.Body>
                </Card>
                {/* </Col> */}


                {/* <Col sm={1} lg={10}> */}
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

                    <h3>Pro</h3>


                    <Card.Body>
                        <h1> $ 399</h1>
                        <Card.Text>
                      <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Carefully crafted components </div>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Amazing page examples </div>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Super friendly support team </div>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Awesome Support </div>
                        </Card.Text>
                        <Button variant="primary">Get Started</Button>
                    </Card.Body>
                </Card>
                {/* </Col> */}


                {/* <Col sm={1} lg={10}> */}
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

                    <h3>Enterprise</h3>


                    <Card.Body>
                        <h1> $ 799</h1>
                        <Card.Text>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Carefully crafted components </div>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Amazing page examples </div>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Super friendly support team </div>
                        <div><i class="fas fa-check-circle" style={{color : 'lightGreen'}}></i> Awesome Support </div>
                        </Card.Text>
                        <Button variant="primary">Get Started</Button>
                    </Card.Body>
                </Card>
                {/* </Col> */}
            </div>

        </div>
    )
}

export default Pricing
