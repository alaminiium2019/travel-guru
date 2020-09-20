import { Container, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";

const CoxsBazarBook = () => {
  return (
      <Container>
    <div className="bookingForm d-flex m-3">
      <div className="row">
        <div className="col-md-8">
          <p>
            This will be about tour. This will be about tour.This will be about
            tourThis will be about tourThis will be about tourThis will be about
            tourThis will be about tourThis will be about tourThis will be about
            tourThis will be about tourThis will be about tourThis will be about
            tourThis will be about tour
          </p>
        </div>
        <div className="col-md-4">
          <BookingForm></BookingForm>
          <button className="btn btn-block"><Link to="/coxsBazarHotel">Start Booking</Link></button>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default CoxsBazarBook;
