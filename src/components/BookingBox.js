import { useState } from "react"
import { Container } from "react-bootstrap"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { BsCheck2Square } from "react-icons/bs";


const BookingBox = () => {

  const [key, setKey] = useState('oneWay');

  return (
    <Container className="bookingBox mt-4">
      <div className="m-4">
        <div className="row">
          <div className="col-8">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="oneWay" title="One Way">
                <div className="m-3">
                  ;kljsdf;lkjk
                </div>
              </Tab>
              <Tab eventKey="roundTrip" title="Round Trip">
                New Tab 02
              </Tab>
              <Tab eventKey="multiCity" title="Multi City">
                New Tab 03
              </Tab>
            </Tabs>
          </div>

          <div className="col-4">
            <div className="bookingInfo d-flex flex-column align-items-start justify-content-start py-3 px-4">
              <div>VBM Schedule. <a href="/">Click Here</a></div>
              <div className="mt-2">Singapore VTL Flights Alert. <a href="/">Click Here</a></div>

              <button type="button" class="btn btn-lg btn-primary w-100 mt-3">
                <div className="d-flex align-items-center justify-content-center">
                  <MdAirlineSeatReclineExtra />
                  <div className="ms-2">Bid &amp; Upgrade</div>
                </div>
              </button>

              <button type="button" class="btn btn-lg btn-primary w-100 mt-3">
                <div className="d-flex align-items-center justify-content-center">
                  <BsCheck2Square />
                  <div className="ms-2">Web Check-in</div>
                </div>
              </button>

              <button type="button" class="btn btn-lg btn-primary w-100 mt-3">
                <div className="d-flex align-items-center justify-content-center">
                  <MdAirlineSeatReclineExtra />
                  <div className="ms-2">Seat Select</div>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </Container>
  )
}

export default BookingBox