import React from 'react';


const BookingForm = () => {
    return (
        <div >
            <form>
                <label>Origin</label>
                <input type="text" className="form-control" placeholder="Dhaka" required></input>
                <label>Destination</label>
                <input type="text" className="form-control" placeholder="Cox's Bazar" required></input>
                
                <div className="d-flex">
                    <div >
                        <label>From</label>
                        <input type="date" placeholder="Select Date"></input>
                    </div>
                
                    <div>
                        <label>To</label>
                        
                        <input type="date" placeholder="Select Date"></input>
                    </div>
                </div>
                

            </form>
        </div>
    );
};

export default BookingForm;