import { useState } from "react"
import { Container } from "react-bootstrap"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { BsCheck2Square } from "react-icons/bs";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const BookingBox = () => {

  const [key, setKey] = useState('oneWay');

  return (
    <Container className="bookingBox mt-4">
      <div className="m-4 mb-3">
        <div className="row">
          <div className="col-12 col-md-8">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="oneWay" title="One Way">
                <div className="mt-3">
                  <Form>
                    <div className="row">
                      <div className="col-6">
                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder="from" />
                        </Form.Group>
                      </div>

                      <div className="col-6">
                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder="to" />
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <Form.Group className="mb-3">
                          <Form.Control type="date" placeholder="Departing" />
                        </Form.Group>
                      </div>

                      <div className="col-3">
                        <Form.Group className="mb-3">
                          <Form.Control type="date" placeholder="Returning" />
                        </Form.Group>
                      </div>

                      <div className="col-6">
                        <div className="d-flex align-items-center justify-content-end h-100">
                          <Form.Group>
                            <Form.Check type="checkbox" label="Flexible Dates" />
                          </Form.Group>
                        </div>
                      </div>
                    </div>

                    <div className="row border-top pt-3">
                      <div className="col-7">
                        <div className="h-100 d-flex align-items-center">
                          Would you like to avail of Domestic Concession? &nbsp; <a href="url">Eligible Rules</a>
                        </div>
                      </div>

                      <div className="col-5">
                        <div className="h-100 d-flex align-items-center">

                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="Yes" id="Yes" />
                            <label className="form-check-label" for="Yes">
                              Yes
                            </label>
                          </div>

                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="No" id="No" checked />
                            <label className="form-check-label" for="No">
                              No
                            </label>
                          </div>

                          <Form.Select aria-label="Default select example">
                            <option>Concessionary Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-2">
                        <div className="d-flex align-items-center">
                          <Form.Select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>

                          <label className="form-check-label ms-2">
                                Adults
                          </label>
                        </div>
                      </div>

                      <div className="col-2">
                        <div className="d-flex align-items-center">
                          <Form.Select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>

                          <label className="form-check-label ms-2">
                                Childrn
                          </label>
                        </div>
                      </div>

                      <div className="col-2">
                        <div className="d-flex align-items-center">
                          <Form.Select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>

                          <label className="form-check-label ms-2">
                                Infants
                          </label>
                        </div>
                      </div>

                      <div className="col-2">
                        <Form.Select>
                          <option>Economy</option>
                          <option value="1">Economy</option>
                          <option value="2">Business</option>
                          <option value="3">First</option>
                        </Form.Select>
                      </div>

                      <div className="col-2">
                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder="Promo Code" />
                        </Form.Group>  
                      </div>

                      <div className="col-2">
                        <Button variant="primary" type="submit" className="w-100">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </Form>
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

          <div className="col-12 col-md-4">
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