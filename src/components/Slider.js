import {useState, useRef, useEffect} from "react"
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import sldrImage01 from "../images/sldrImage01.jpg"
import sldrImage02 from "../images/sldrImage02.jpg"
import sldrImage03 from "../images/sldrImage03.jpg"
import sldrImage04 from "../images/sldrImage04.jpg"

const Slider = () => {
  const sldrImages = [ sldrImage01, sldrImage02, sldrImage03, sldrImage04 ]

  const [scrollValue, setScrollValue] = useState(0)

  const scrollStrip = useRef("scrollStrip");

  useEffect(() => {
    scrollStrip.current.scrollLeft = `${scrollValue}`;
  }, [scrollValue])

  const prev = () => {
    if(scrollValue > 0) {
    setScrollValue(scrollValue-50)
    }
  }

  const next = () => {
    if(scrollValue < scrollStrip.current.scrollLeftMax) {
      setScrollValue(scrollValue+50)
    }
  }

  return (
    <div>
      <div className='container slider mt-4'>
        <button className='leftArrow' onClick={prev}>
          <BsChevronCompactLeft /> 
        </button>

        <button className='rightArrow' onClick={next}>
          <BsChevronCompactRight />
        </button>

        <div className='scrollStrip' ref={scrollStrip}>
          {sldrImages.map((i, key) => (
            <div key={key} className="imageBox m-3 shadow">
              <img
                src={i}
                alt="First slide"
              />
            </div>                      
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider