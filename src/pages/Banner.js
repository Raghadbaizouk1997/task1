import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../components/Carousel/carousel.css";
import { data } from "../data/data";

let slidesToShow = 1;
const PreviousBtn = (props) => {
  // 
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div style={{left: '0',zIndex: '1',backgroundColor: 'white', height: '50px'}} className={className} onClick={onClick}>
          <FaArrowLeft style={{ color: '#8E8E8E', fontSize: "15px", paddingTop:'20px' }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  // 
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div style={{right: '0',backgroundColor: 'white', height: '50px'}} className={className} onClick={onClick}>
          <FaArrowRight style={{ color: '#8E8E8E', fontSize: "15px", paddingTop:'20px'  }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  infinite: false,
  // slidesToScroll={3}
//   responsive: [
//     {
//       breakpoint: 426,
//       settings: {
//         slidesToShow: 2,
//         centerMode: false,
//       },
//     },
//     {
//       breakpoint: 769,
//       settings: {
//         slidesToShow: 3,
//         centerMode: false,
//       },
//     },
//     {
//       breakpoint: 1025,
//       settings: {
//         slidesToShow: 4,
//         centerMode: false,
//         slidesToScroll: 2,
//       },
//     },
//   ],
};

const Banner = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

//   if (width <= 426) {
//     slidesToShow = 2;
//   } else if (width > 426 && width <= 769) {
//     slidesToShow = 3;
//   } else if (width > 769 && width <= 1025) {
//     slidesToShow = 4;
//   } else {
//     slidesToShow = 5;
//   }

  return (
    <div  className="carousel-banner">
      <div>
        <Slider {...carouselProperties}>
          {data.map((item) => (
            <BannerImg item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const BannerImg = ({ item }) => (
    <div style={{ textAlign: "center" }}>
        <img
            src={item}
            alt=""
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                marginBottom: "10px",
            }} />
    </div>
);

export default Banner;
