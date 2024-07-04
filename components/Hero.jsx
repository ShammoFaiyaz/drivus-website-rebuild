import Image from 'next/image';

import slide_1 from "../public/slide-1.png";
import slide_2 from "../public/slide-2.png";
import slide_3 from "../public/slide-3.png";

const Hero = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={slide_1} width={1950} height={650} alt="slide 1" layout="responsive" />
        </div>

        <div className="carousel-item">
          <Image src={slide_2} width={1950} height={650} alt="slide 2" layout="responsive" />
        </div>

        {/* <div className="carousel-item">
          <Image src={slide_3} width={1950} height={650} alt="slide 3" layout="responsive"/>
        </div> */}

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  )
}

export default Hero;