import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/review.css'

function Reviews() {
  return (
    <div className='cont-carousel'>
        {/* <img src={require('../assets/loation.png')} className="DecorationL" alt='' /> */}
        <div className="title">What People Say About Us</div>
            <Carousel className='carousel'>
                <Carousel.Item >
                    <img className="backgorund" src={require("../assets/reviewbg.png")} alt='pic'/>
                    <Carousel.Caption className="content">
                        <img src={require("../assets/person.png")} alt="avatar" className='avatar'/>
                    <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</i></p>
                        <span>- Jeo Stanley</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="backgorund" src={require("../assets/reviewbg.png")} alt='pic'/>
                    <Carousel.Caption className="content">
                        <img src={require("../assets/person.png")} alt="avatar" className='avatar'/>
                        <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</i></p>
                        <span>- Stanley Jeo</span>
                    </Carousel.Caption>
            
        </Carousel.Item>
    </Carousel>
        {/* <img src={require('../assets/loation.png')} className="DecorationR" alt='' /> */}
    </div>
  )
}

export default Reviews;