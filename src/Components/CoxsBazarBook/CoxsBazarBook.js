import { Container, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";
import './CoxsBazarBook.css';

const CoxsBazarBook = () => {
  return (
      <div className="bgcolor">
      <Container className="p-4">
    <div className="bookingForm d-flex mt-3">
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
        <div className="col-md-4 p-4" style={{border:'2px solid red',borderRadius:'5px'}}>
          <BookingForm></BookingForm>
          <button style={{backgroundColor:'#ffbb00'}} className="btn btn-block mt-3"><Link to="/coxsBazarHotel">Start Booking</Link></button>
        </div>
      </div>
    </div>
    </Container>
    </div>
  );
};

export default CoxsBazarBook;
