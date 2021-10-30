import React from 'react';

import { Image, Button, Col, Row } from 'react-bootstrap'

import callactionImage from '../../images/call-to-action.png'
import './callToAction.css'

const CalltoAction = () => {
    return (
        <div className='callActionWrapper col-lg-12  col-sm-5'>
            <div className='firstCol'>
                
                    <Image src ={callactionImage} alt ='' fluid />
             
            </div>

            <div className='calltoaction'>
            <div  style ={{ textAlign:'center', marginTop : '20px', margin : '10px'}}>
                <h1>Curious to Learn More?</h1>
                <h1>Stay Tuned</h1>

                <p>You let us know whenever you want us to update anything or think something</p>
                <p style={{marginTop : '-8px'}}>can be optimised.</p>

                <div className ='contactMail' style={{justifyContent:'center',backgroundColor: 'white', padding : '7px', margin:'0 8rem', borderRadius:'25px' }}>
                    <i class="fas fa-3 fa-envelope-square" style ={{style : 'blue', marginRight:'10px' }}></i>
                    <input style={{border:'none'}} type='text' placeholder='john@gmail.com' />
                    <Button style={{marginLeft : '4rem', borderRadius:'20px', padding:'10px 30px'}}> SUBSCRIBE </Button>
                </div>

            </div>
            {/* </Col> */}
            </div>
        </div>
    )
}

export default CalltoAction
