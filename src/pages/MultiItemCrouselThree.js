import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaRegHeart,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import background from "../assets/background.svg";
import "../components/Carousel/carousel.css";
import ViewAll from "../components/ViewAll/ViewAll";
import { multiData } from "../data/data";
let slidesToShow = 5;
const PreviousBtn = (props) => {
  
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <FaArrowLeft style={{ color: "#8E8E8E", fontSize: "15px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <FaArrowRight style={{ color: "#8E8E8E", fontSize: "15px" }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCrouselThree = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 600 && width <= 769) {
    slidesToShow = 2;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <div className="carousel carousal-margin">
      <ViewAll
        title="Special offers/ Discounts"
        imageUrl={background}
        backgroundColor="linear-gradient(to bottom, #0081CF , #5EBAF2)"
      />
      <div className="slider-container">
        <Slider {...carouselProperties}>
          {multiData.map((item) => (
            <Card item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFilledStar, setIsFilledStar] = useState(false);

  const handleIconClick = () => {
    setIsFilled(!isFilled);
  };
  const handleIconStarClick = () => {
    setIsFilledStar(!isFilled);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="top-section-card">
        <p className="express-delivery">Express Delivery</p>
        <div onClick={handleIconClick}>
          {isFilled ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </div>
      <div className="card-responsive-eith-img">
        <div>
        <img
          className="multi__image"
          src={item.image}
          alt=""
          style={{
            width: "100%",
            height: "170px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
        </div>
        <div>
          <div className="top-section-card">
            <div className="rating-section">
              <div onClick={handleIconStarClick}>
                {isFilledStar ? <FaStar color="yellow" /> : <FaRegStar />}
              </div>
              <span>4.5 (99999)</span>
            </div>
            <p className="discount">50% OFF</p>
          </div>
          <p
            style={{
              fontSize: "16px",
              padding: "5px 0",
              textAlign: "left",
              marginBottom: "0",
            }}
          >
            {item.title}
          </p>
          <p
            style={{
              color: "var(--accent-color)",
              fontSize: "14px",
              textAlign: "left",
            }}
            className="txt-card"
          >
            {item.price}
          </p>
          <p style={{ color: "#8E8E8E", textAlign: "left" }}>
            AED{" "}
            <span style={{ fontWeight: "bold", color: "var(--black-color)" }}>
              200
            </span>
            <span
              style={{
                textDecoration: "",
                fontSize: "12px",
                marginLeft: "5px",
              }}
            >
              AED 400
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiItemCrouselThree;
