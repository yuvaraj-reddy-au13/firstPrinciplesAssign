import React from 'react';
import { Container, Image} from 'react-bootstrap';

import './companies.css'

import client_logo_1 from '../../images/client_logo_01.png';
import client_logo_2 from '../../images/client_logo_02.png';
import client_logo_3 from '../../images/client_logo_03.png';
import client_logo_4 from '../../images/client_logo_04.png';

const Companies = () => {
    return (
        <div className='companies'>
            <Container style={{justifyContent:'space-around'}}>
                <Image style ={{margin : '25px' }}  src={client_logo_1} alt ='client_logo_1' fluid />
                <Image  style ={{margin : '25px' }}  src={client_logo_2} alt ='client_logo_2' fluid />
                <Image  style ={{margin : '25px' }}  src={client_logo_3} alt ='client_logo_3' fluid />
                <Image   style ={{margin : '25px' }} src={client_logo_4} alt ='client_logo_4' fluid />
            </Container>
        </div>
    )
}

export default Companies
