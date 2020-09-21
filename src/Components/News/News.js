import { Button, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookDetailsData from "../BookDetailsData/BookDetailsData";
import "./News.css";

const News = () => {
  const [bookdata, setBookData] = useState({});

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const TourData = BookDetailsData.find(
      (bookdata) => bookdata.bookId === index
    );
    setBookData(TourData);
  }, [index]);

  return (
    <div className="bg">
      <Container>
        <div className="row pt-4">
          <div className="col-md-8 font-style">
            <h1>{bookdata.name}</h1>
            <p>{bookdata.placeIdea}</p>
            <Link to="/coxsbazarBook">
              <Button
                className="button mb-2"
                style={{ backgroundColor: "#ffbb00" }}
                height="40px"
                variant="contained"
              >
                Booking >>
              </Button>
            </Link>
          </div>

          <div className="col-md-4">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/9gQZxBQ/Sajek.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Cox's bazar</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/YPKSjtc/Sreemongol.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3 className="pb-2">Sreemongol</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/2SD3HhX/sundorbon.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Sundorbon</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default News;
