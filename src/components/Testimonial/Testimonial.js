import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Card , Button, Image} from 'react-bootstrap';

import author1 from '../../images/author-1.jpg';
import author2 from '../../images/author-2.jpg';
import author3 from '../../images/author-3.jpg';
import author4 from '../../images/author-4.jpg';

import './testimonial.css'







const Testimonial = () => {
    const images = [author1, author2, author3, author4]
    return (
        <div id='testimonial' className='cardWrapper'>
            <Carousel>
                {images.map(image => (

                
            <Card className='cardConatiner' style={{ width: '28rem' , textAlign:'center'}}>
                {/* <Card.Img variant="top" className='testmonialImage' src={author1} /> */}
                <div className='userImage'>
                <Image roundedCircle className='testmonialImage center' src={image} fluid />
                </div>
                
                <Card.Body>
                    <Card.Title>Author</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>

            
            ))}
            </Carousel>
        </div>
    )
}

export default Testimonial
