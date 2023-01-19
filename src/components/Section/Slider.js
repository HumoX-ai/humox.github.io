import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <ArrowForwardIosIcon sx={{ color: "#09a66d" }} />,
      prevArrow: <ArrowBackIosNewIcon sx={{ color: "#09a66d" }} />,
    };
    return (
      <div style={{ marginTop: "30px" }}>
        <Slider {...settings}>
          <div>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore explicabo debitis dolores perferendis suscipit sint
              quos! Expedita ipsum corporis rem neque nobis ex. Blanditiis
              dolorum quae eligendi quis quam, maxime ducimus laboriosam, totam
              porro, nostrum vero maiores.
            </Typography>
            <Box>
              <Typography variant="subtitle1" fontWeight={800}>
                Ahmed Hridoy
              </Typography>
              <Rating name="size-large" defaultValue={2} size="large" />
            </Box>
          </div>
          <div>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore explicabo debitis dolores perferendis suscipit sint
              quos! Expedita ipsum corporis rem neque nobis ex. Blanditiis
              dolorum quae eligendi quis quam, maxime ducimus laboriosam, totam
              porro, nostrum vero maiores.
            </Typography>
            <Box>
              <Typography variant="subtitle1" fontWeight={800}>
                Humoyun Java
              </Typography>
              <Rating name="size-large" defaultValue={5} size="large" />
            </Box>
          </div>
        </Slider>
      </div>
    );
  }
}
