import { Container } from "react-bootstrap"
import cmp01 from "../images/cmp01.jpg"
import cmp02 from "../images/cmp02.jpg"
import cmp03 from "../images/cmp03.jpg"

const InfoSection = () => {
  const url = ""
  return (
    <Container className=" infoSection mt-4">
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className="card border-radius shadow my-3" >
            <div className='mx-4 mt-4 mb-2'>
              <div className="g-Box">
                <img
                  src={cmp01}
                  alt="First slide"
                />
              </div>
            </div>

            <div className="card-body mx-2 mb-3">
              <h5 className="card-title">Kalpa Phase I</h5>

              <p className="card-text">This unique development is in a vibrant location of Bangalore, with every kind of indoor &amp; outdoor sports.</p>
              <a href={url} className="btn btn-primary">See Details</a>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-6 col-lg-4'>
          <div className="card border-radius shadow my-3" >
            <div className='mx-4 mt-4 mb-2'>
              <div className="g-Box">
                <img
                  src={cmp02}
                  alt="First slide"
                />
              </div>
            </div>

            <div className="card-body mx-2 mb-3">
              <h5 className="card-title">Kalpa Pearl Valley</h5>
              <p className="card-text">This unique development is in a vibrant location of Bangalore, with every kind of indoor &amp; outdoor sports.</p>
              <a href={url} className="btn btn-primary">See Details</a>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-0'>
          <div className="card border-radius shadow my-3" >
            <div className='mx-4 mt-4 mb-2'>
              <div className="g-Box">
                <img
                  src={cmp03}
                  alt="First slide"
                />
              </div>
            </div>

            <div className="card-body mx-2 mb-3">
              <h5 className="card-title">Kalpa Layout Phase III</h5>
              <p className="card-text">This unique development is in a vibrant location of Bangalore, with every kind of indoor &amp; outdoor sports.</p>
              <a href={url} className="btn btn-primary">See Details</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default InfoSection