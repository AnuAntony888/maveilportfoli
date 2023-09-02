import React from "react";
import Slider from "react-slick";
import styles from "../styles/About.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Testmonialcard, TypographyText } from "../Reuse/Reuse";
const Testmonials = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (
    <div id="testmonials">
      <Slider {...settings}>
        {Data.map((data, index) => (
          <Testmonialcard key={index} image={data.image} />
        ))}
      </Slider>
      <TypographyText
        Typography={"Achievements and Certificates"}
        color="#f4af1b"
      />
    </div>
  );
};

export default Testmonials;

const Data = [
  {
    image:
      "https://bucket-thesocialtalks.s3.amazonaws.com/static/article/2021/08/02/onam-vamana-792x1024.jpg",
  },
  {
    image:
      "https://www.indiansinkuwait.com/ShowImage.aspx?img=/Newsfile/308202071849328aug3020gayathri.jpg&w=650",
  },
  {
    image: "/Best.jpeg",
  },
];

const settings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
};
