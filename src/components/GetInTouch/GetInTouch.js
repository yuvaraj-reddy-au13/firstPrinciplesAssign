import React from 'react'
import { Container, Form, Row , Col, Button} from 'react-bootstrap'

const GetInTouch = () => {
    return (

        <div id='contact' style={{textAlign:'center', marginTop :'2rem'}}>
            <h1>Get In touch</h1>
            <p>Stop wasting time and money designing and managing a website</p>
            <Container>
                <div style={{margin : '3rem 10rem'}}>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        {/* <Form.Label>Name</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        {/* <Form.Label>Email</Form.Label> */}
                        <Form.Control type="password" placeholder="your Email" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        {/* <Form.Label>Subject</Form.Label> */}
                        <Form.Control type="email" placeholder="Your Subject" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        {/* <Form.Label>Phone</Form.Label> */}
                        <Form.Control type="password" placeholder="Phone" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        {/* <Form.Label>Address</Form.Label> */}
                        {/* <Form.Control textAria='50' placeholder="1234 Main St" /> */}
                        <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                    </Form.Group>

                        <Button>Submit</Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default GetInTouch
