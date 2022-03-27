import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'
import banner01 from "../images/banner01.jpg"
import banner02 from "../images/banner02.jpg"
import banner03 from "../images/banner03.jpg"


const Banner = () => {

  const bnrImages = [
    {imgUrl:banner01},
    {imgUrl:banner02},
    {imgUrl:banner03}
  ]

  return (
    <>
      <Container className='p-0' >
        <div className='banner greyBG p-0'>
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
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </div>

          <div className='my-3 mx-4 text-center'>
            <h6>
              It is mandatory for all passengers to wear mask,ensure hand hygiene and maintain social distancing at all times during air travel. KNOW MORE 
            </h6>
          </div>
        </div>
      </Container>
    </>
  );
}
 
export default Banner;