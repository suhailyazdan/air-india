import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'
import banner02 from "../images/banner02.jpg"
import banner03 from "../images/banner03.jpg"
import banner04 from "../images/banner04.jpg"
import banner05 from "../images/banner05.jpg"
import banner06 from "../images/banner06.jpg"

const Banner = () => {

  const bnrImages = [
    {imgUrl:banner02},
    {imgUrl:banner06},
    {imgUrl:banner04},
    {imgUrl:banner03},
    {imgUrl:banner05}
  ]

  return (
    <>
      <Container className='p-0' >
        <div className='banner gradientBg p-0 bg-info'>
          <div className='banner p-0'>
            <Carousel fade>
              {
                bnrImages.map((image, i) => (
                  <Carousel.Item key={i}>
                    <div className='bnrImgWrapper'>
                      <img
                        src={image.imgUrl}
                        alt="First slide"
                      />  
                    </div>

                    <Carousel.Caption >
                      <h3 style={{textShadow: "0px 0px 10px rgba(0, 0, 0, 1)"}}>Where Luxury Meets Location</h3>
                      <p style={{textShadow: "0px 0px 3px rgba(0, 0, 0, 1)"}}>Happiness inspired by unlimited luxury. Own your dreams with luxury and Savings</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </div>

          <div className='my-3 mx-4 text-center'>
            <h5>
              It is mandatory for all passengers to wear mask,ensure hand hygiene and maintain social distancing at all times during air travel .KNOW MORE. | 
            </h5>
          </div>
        </div>
      </Container>
    </>
  );
}
 
export default Banner;