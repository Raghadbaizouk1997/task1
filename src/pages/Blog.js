import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../components/Carousel/carousel.css";
import { blogData } from "../data/data";

let slidesToShow = 3;
const PreviousBtn = (props) => {
  
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div
          style={{
            left: "0",
            zIndex: "1",
            backgroundColor: "var(--gray-color-lighter)",
            height: "50px",
          }}
          className={className}
          onClick={onClick}
        >
          <FaArrowLeft
            style={{ color: "#8E8E8E", fontSize: "15px", paddingTop: "20px" }}
          />
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
        <div
          style={{
            right: "0",
            backgroundColor: "var(--gray-color-lighter)",
            height: "50px",
          }}
          className={className}
          onClick={onClick}
        >
          <FaArrowRight
            style={{ color: "#8E8E8E", fontSize: "15px", paddingTop: "20px" }}
          />
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
  responsive: [
    {
      breakpoint: 426,
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
        slidesToScroll: 1,
      },
    },
  ],
};

const Blog = () => {
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
  } else if (width > 426 && width <= 769) {
    slidesToShow = 2;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 3;
  } else {
    slidesToShow = 5;
  }

  return (
    <>
      <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between', margin: '30px'}}>
        <p style={{fontSize: '20px', fontWeight:'bold'}}>Blog Post</p>
        <button style={{padding: '15px' , border: '1px solid var(--gray-color)', background: 'var(--white-color)',borderRadius: 'var(--border-raduis)'}}>View more</button>
      </div>
      <div className="blog-container" style={{ margin: "30px" }}>
        <Slider {...carouselProperties}>
          {blogData.map((item) => (
            <Card item={item} style={{ boxShadow: "var(--box-shadow)" }} />
          ))}
        </Slider>
      </div>
    </>

    // </div>
  );
};

const Card = ({ item }) => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={item.image}
        alt=""
        style={{
          width: "100%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <p
        style={{
          fontSize: "14px",
          padding: "5px 0",
          fontWeight: "bold",
          marginBottom: "0",
          textAlign: "left",
        }}
      >
        {item.title}
      </p>
      <p style={{ color: "black", textAlign: "left" }} className="txt-card">
        {item.price}
      </p>
      <button
        style={{
          border: "1px solid var(--primary-color)",
          background: "none",
          padding: "15px",
          width: "40%",
          borderRadius: "var(--border-raduis)",
          color: "var(--primary-color)",
          marginTop: "10px",
        }}
      >
        read more
      </button>
    </div>
  );
};

export default Blog;
