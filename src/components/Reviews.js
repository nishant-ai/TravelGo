import React from 'react';
import styled, { css } from 'styled-components'
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonNext,
    ButtonBack
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// import Carousel from 'react-bootstrap/Carousel';
// import '../styles/review.css';

// const slides = [
//     "https://picsum.photos/200/300/?blur",
//     "https://picsum.photos/200/300?grayscale",
//     "https://picsum.photos/seed/picsum/200/300"
// ]
function Reviews() {
    const slides = [
        "https://picsum.photos/200/300/?blur",
        "https://picsum.photos/200/300?grayscale",
        "https://picsum.photos/seed/picsum/200/300"
    ]
  return (

    // < styled component carousel
    <PageContainer>
        <ExampleParagraph>some text to confirm if i can even render punani to the screen</ExampleParagraph>
        <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={1000}
          naturalSlideHeight={500}
          totalSlides={slides.length}
          visibleSlides={1}
        >
          <Slider>
            {slides.map((slide, index) => (
              <Slide index={index}>
                <Image image={slide} />
              </Slide>
            ))}
          </Slider>
          <Nav>
            <BackButton>{`<`}</BackButton>
            <NextButton>{`>`}</NextButton>
          </Nav>
        </CarouselProvider>
      </SliderWrapper>
    </PageContainer>
    // styled component carousel />
    
    // start of bootstrap carousel
    // <div className='cont-carousel'>
    //     {/* <img src={require('../assets/loation.png')} className="DecorationL" alt='' /> */}
    //     <div className="title">What People Say About Us</div>
    //         <Carousel className='carousel'>
    //             <Carousel.Item interval={1000}>
    //                 <img className="backgorund" src={require("../assets/reviewbg.png")} alt='pic'/>
    //                 <Carousel.Caption className="content">
    //                     <img src={require("../assets/person.png")} alt="avatar" className='avatar'/>
    //                 <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</i></p>
    //                     <span>- Jeo Stanley</span>
    //                 </Carousel.Caption> 
    //             </Carousel.Item> 
    //             <Carousel.Item interval={500}>
    //                 <img className="backgorund" src={require("../assets/reviewbg.png")} alt='pic'/>
    //                 <Carousel.Caption className="content">
    //                     <img src={require("../assets/person.png")} alt="avatar" className='avatar'/>
    //                     <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</i></p>
    //                     <span>- Stanley Jeo</span>
    //                 </Carousel.Caption>

    //     </Carousel.Item>
    // </Carousel>
    //     <img src={require('../assets/loation.png')} className="DecorationR" alt='' />
    // </div>
    // end of bootstrap carousel
  )
//   const slides = [
//     "http: //www.gpdesigns.net/bikes/img/gpdesigns5_1000x500.jpg",
//     "https://www.teahub.io/photos/full/17-170547_chicago-city-skyline-at-night.jpg",
//     "https://www.sunshinecoastair.com/wp-content/uploads/2018/11/PhaLake4-1000x500.jpg",
//   ];
}

export default Reviews;

const PageContainer = styled.div`
  background-color: #96ceb4;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.div`
  width: 1000px;
  height: 500px;
  background: url(${(p) => p.image});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;
  const SliderWrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 1000px;
    height: 500px;
    background: white;
    background-color: #ff6f69;
  `;
const ExampleParagraph = styled.div `

`


  
  const Nav = styled.nav`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
  `;
  
  const sharedStyles = css`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: 0;
    font-size: 40px;
    outline: none;
    transition: opacity 0.35s;
    &:disabled {
      opacity: 0;
    }
  `; 
     // background: ${rgba("#1a132b", 0.5)};
  const NextButton = styled(ButtonNext)`
    ${sharedStyles};
  `;
  const BackButton = styled(ButtonBack)`
    ${sharedStyles};
  `;
  
//   const SliderWrapper = styled.div`
//     overflow: hidden;
//     position: relative;
//     width: 1000px;
//     height: 500px;
//     background: white;
//     background-color: #ff6f69;
//   `;
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import styled, { css } from "styled-components";
// import { rgba } from "polished";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonNext,
//   ButtonBack,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";


// const PageContainer = styled.div`
//   background-color: #96ceb4;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Image = styled.div`
//   width: 1000px;
//   height: 500px;
//   background: url(${(p) => p.image});
//   background-position: center;
//   background-size: 100%;
//   background-repeat: no-repeat;
// `;

// const slides = [
//   "http: //www.gpdesigns.net/bikes/img/gpdesigns5_1000x500.jpg",
//   "https://www.teahub.io/photos/full/17-170547_chicago-city-skyline-at-night.jpg",
//   "https://www.sunshinecoastair.com/wp-content/uploads/2018/11/PhaLake4-1000x500.jpg",
// ];

// const Nav = styled.nav`
//   position: absolute;
//   top: 50%;
//   left: 0;
//   transform: translateY(-50%);
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
// `;

// const sharedStyles = css`
//   width: 50px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: ${rgba("#1a132b", 0.5)};
//   color: white;
//   border: 0;
//   font-size: 40px;
//   outline: none;
//   transition: opacity 0.35s;
//   &:disabled {
//     opacity: 0;
//   }
// `;
// const NextButton = styled(ButtonNext)`
//   ${sharedStyles};
// `;
// const BackButton = styled(ButtonBack)`
//   ${sharedStyles};
// `;

// const SliderWrapper = styled.div`
//   overflow: hidden;
//   position: relative;
//   width: 1000px;
//   height: 500px;
//   background: white;
//   background-color: #ff6f69;
// `;
// const App = () => {
//   return (
//     <PageContainer>
//       <SliderWrapper>
//         <CarouselProvider
//           naturalSlideWidth={1000}
//           naturalSlideHeight={500}
//           totalSlides={slides.length}
//           visibleSlides={1}
//         >
//           <Slider>
//             {slides.map((slide, index) => (
//               <Slide index={index}>
//                 <Image image={slide} />
//               </Slide>
//             ))}
//           </Slider>
//           <Nav>
//             <BackButton>{`<`}</BackButton>
//             <NextButton>{`>`}</NextButton>
//           </Nav>
//         </CarouselProvider>
//       </SliderWrapper>
//     </PageContainer>
//   );
// };

// export default App;

// get the images locally or watch a video or something bro