import { Container } from "react-bootstrap"
import fLogo from "../images/find-us-on-facebook.png"
import tLogo from "../images/follow-us-on-twitter.png"
import gPlay from "../images/google-play-app-icon.png"
import aStore from "../images/apple-app-icon.png"

const Footer = () => {
  const url = '';

  return (
    <div className='Footer w-100 mt-4 py-5'>
      <Container>
        <div className="row">
          <div className="col-6 col-lg-3">
            <ul>
              <li className="listItem"><a href={url}>About Air India</a></li>
              <li className="listItem"><a href={url}>Engineering Services</a></li>
              <li className="listItem"><a href={url}>Air India Airport Services</a></li>
              <li className="listItem"><a href={url}>Conditions of Carriage</a></li>
              <li className="listItem"><a href={url}>About Air India</a></li>
              <li className="listItem"><a href={url}>Engineering Services</a></li>
              <li className="listItem"><a href={url}>Air India Airport Services</a></li>
              <li className="listItem"><a href={url}>Conditions of Carriage</a></li>              
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <ul>
              <li className="listItem"><a href={url}>Media Center</a></li>
              <li className="listItem"><a href={url}>Citizen's Charter</a></li>
              <li className="listItem"><a href={url}>Forms and Downloads</a></li>
              <li className="listItem"><a href={url}>Canada Regulations</a></li>
              <li className="listItem"><a href={url}>About Air India</a></li>
              <li className="listItem"><a href={url}>Engineering Services</a></li>
              <li className="listItem"><a href={url}>Air India Airport Services</a></li>
              <li className="listItem"><a href={url}>Conditions of Carriage</a></li>              
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <ul>
              <li className="listItem"><a href={url}>Vigilance</a></li>
              <li className="listItem"><a href={url}>Tenders</a></li>
              <li className="listItem"><a href={url}>Feedback</a></li>
              <li className="listItem"><a href={url}>Feedback Status</a></li>
              <li className="listItem"><a href={url}>About Air India</a></li>
              <li className="listItem"><a href={url}>Engineering Services</a></li>
              <li className="listItem"><a href={url}>Air India Airport Services</a></li>
              <li className="listItem"><a href={url}>Conditions of Carriage</a></li>              
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <ul>
              <li className="listItem"><a href={url}>Sitemap</a></li>
              <li className="listItem"><a href={url}>Careers</a></li>
              <li className="listItem"><a href={url}>Travel Agents</a></li>
              <li className="listItem"><a href={url}>FAQs</a></li>
              <li className="listItem"><a href={url}>Customer Support</a></li>
              <li className="listItem"><a href={url}>Engineering Services</a></li>
              <li className="listItem"><a href={url}>Air India Airport Services</a></li>
              <li className="listItem"><a href={url}>Conditions of Carriage</a></li>              
            </ul>
          </div>
        </div>

        <div className="row border-top border-bottom my-5 py-3">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-end">
              <img src={fLogo} alt="Find us on facebook" className="mx-3" />
              <img src={tLogo} alt="Follow us on twitter" className="mx-3" />
              <img src={gPlay} alt="Google Play"  className="mx-3"/>
              <img src={aStore} alt="App Store" className="mx-3" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h6>All donations towards the Prime Minister's National Relief Fund (PMNRF) are notified for 100% deduction from taxable income under Section 80G of the Income Tax Act, 1961.</h6>
            
            <div className="d-flex align-items-center justify-content-between pb-3">
              <h6>Copyright © 2018 Air India Ltd. All rights reserved.</h6>
              <h6>Visitors: 312313345</h6>
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-center">
              <a href="url">Terms and Conditions</a><span className="mx-3">|</span>
              <a href="url">Hyperlinking Policy</a><span className="mx-3">|</span>
              <a href="url">Accessibility Statement</a><span className="mx-3">|</span>
              <a href="url">Disclaimer</a><span className="mx-3">|</span>
              <a href="url">Help</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer