import React from 'react';
import { Image , Container} from 'react-bootstrap'

import './craftedFor.css'

import services from '../../images/services.png';

const CraftedFor = () => {
    return (
        <div id='services' className='craftedforwrapper col-lg-12 col-sm-5'>

            <Container>

                <div style={{margin : '10px 3rem'}}>
                    <h1> Crafted For</h1>
                    <p> Stop wasting time and money designing and managing a website that doesn’t get results</p>
                </div>


            
            <div style = {{ marginLeft : '3rem'}}>
                <div>
                    
                    <div style={{display:'flex', flexDirection: 'row',  marginTop : '5rem'}}>
                        <i class="fas fa-7x fa-bolt" style={{color : 'blue'}}></i>

                        <div style={{display:'flex', flexDirection: 'column', margin:'0 10px'}}>
                        <h3>Start Up</h3>
                        
                                <p>Short description for the ones</p>
                                  <p style={{marginTop : '-10px'}}>  who look for something new.</p>
                           
                        </div>
                     </div>


                     <div style={{display:'flex', flexDirection: 'row', marginTop : '5rem'}}>
                        {/* <i class="fas fa-7x fa-bolt" style={{color : 'blue'}}></i> */}
                        {/* <i class="icon-bar-chart" style={{color : 'blue'}}></i> */}
                        <i class="fas fa-5x fa-lightbulb" style={{color : 'blue'}}></i>

                        <div style={{display:'flex', flexDirection: 'column', margin:'0 10px'}}>
                        <h3>App Landing</h3>
                        
                                <p>Short description for the ones</p>
                                  <p style={{marginTop : '-10px'}}>  who look for something new.</p>
                           
                        </div>
                     </div>

                </div>
            </div>
            </Container>
           

            {/* <Container> */}
            {/* <div> */}
     
                <Image className =' craftedForImage' src={services} alt='craftedfor' fluid />

            {/* </div> */}
    
            {/* </Container> */}


            </div>


    )
}

export default CraftedFor
