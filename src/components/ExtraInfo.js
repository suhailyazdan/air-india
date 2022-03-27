import { Container } from "react-bootstrap"
import cmp04 from "../images/cmp04.jpg"
import cmp05 from "../images/cmp05.jpg"
import cmp06 from "../images/cmp06.jpg"

const ExtraInfo = () => {
  const url = '';
  return (
    <Container>
      <div className="row mt-2">
        <div className="col-3">
          <a href={url} className="extraBox">
            <img src={cmp04} alt="extra info 01" />
          </a>
        </div>

        <div className="col-3">
          <a href={url} className="extraBox">
            <img src={cmp05} alt="extra info 01" />
          </a>
        </div>

        <div className="col-3">
          <a href={url} className="extraBox">
            <img src={cmp06} alt="extra info 01" />
          </a>
        </div>

        <div className="col-3">
          <a href={url} className="extraBox">
            <img src={cmp04} alt="extra info 01" />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default ExtraInfo