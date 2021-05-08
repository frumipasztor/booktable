import React, {useState, useEffect} from 'react';
import LoadingMask from "../loadingMask/LoadingMask";
import BookedPerson from "./BookedPerson";
import "./admin.scss";

function Bookings() {

    //! DATA FETCH
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const fetchData = async () => {
        const result = await fetch("http://localhost:3001/bookings");
        const jsonData = await result.json();
        console.log(jsonData);
        setData(jsonData.person);
    };

    return (
        <div className="bookingsPage">
            {/* {loading ? (
        <LoadingMask />
      ) : (
        data.map((person, index) => <BookedPerson person={person} key={index} />)
      )} */}
      Fejlesztés alatt...
        </div>
    )
}

export default Bookings
