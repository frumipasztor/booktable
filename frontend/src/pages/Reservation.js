import React from 'react'
import Header from '../components/header/Header';
import ReservationForm from "../components/form/reservationForm";
import Footer from '../components/footer/Footer';

function Reservation() {
    return (
        <div className="reservation">
            <Header/>
            <ReservationForm/>
            <Footer/>
        </div>
    )
}

export default Reservation
