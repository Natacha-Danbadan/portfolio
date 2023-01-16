import Slider from "react-slick";
import Work from "./Work";

function WorkSlides({mainarray}) {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="w-full">
        <div className="">
          <Slider {...settings}>
            {mainarray.map((item, idx) => <Work key={idx} props={item}/>)}
          </Slider>
        </div>  
      </div>
    );
}

export default WorkSlides
