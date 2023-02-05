import React from 'react'
import paytm_1 from "../../slider-images/paytm.jpg"
import paytm_2 from "../../slider-images/paytm-discount.jpg"
import paytm_3 from "../../slider-images/Paytm-Exclusive-Offers.jpg"
import { CCarousel,CImage,CCarouselItem} from '@coreui/react';

function Slider() {
  return (
    <div classNameName='container'>
        <CCarousel controls indicators>
        <CCarouselItem>
            <CImage className="d-block w-100 custom-height-150" src={paytm_1}  alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
            <CImage className="d-block w-100 custom-height-150" src={paytm_2} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
            <CImage className="d-block w-100 custom-height-150" src={paytm_3} alt="slide 3" />
        </CCarouselItem>
        </CCarousel>
    </div>
  )
}

export default Slider
