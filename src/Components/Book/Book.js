import { TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = () => {
    
    return (
        <div className="bookingForm">
            <div className="placeDetails">
                <p>This will be about tour. This will be about tour.This will be about tourThis will be about tourThis will be about tourThis will be about tourThis will be about tourThis will be about tourThis will be about tourThis will be about tourThis will be about tourThis will be about tourThis will be about tour</p>
            </div>  
            <div className="BookForm">
                <form>
                    <p>Origin:</p>
                    <TextField value="Dhaka"></TextField>
                    <p>Destination:</p>
                    <TextField value="Cox's Bazar"></TextField>
                    <TextField label="From" value="2020-10-03"
                      >
                    </TextField>

                    <TextField style={{paddingLeft:'10px'}} label="To" value="2020-10-03">                      >
                    </TextField>
                    <br/>
                    <button><Link to="/coxsBazar">Start Booking</Link></button>
                </form>      
                
                
            </div>          
        </div>
    );
};

export default Book;