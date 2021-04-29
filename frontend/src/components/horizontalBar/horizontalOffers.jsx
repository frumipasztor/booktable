import React, {useState, useEffect} from 'react';
import LoadingMask from "../loadingMask/LoadingMask";
import TopPizza from "./TopPizzaCard";


function HorizontalOffers() {

    //! DATA FETCH
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchData();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
  
    const fetchData = async () => {
      const result = await fetch("http://localhost:3001/toppizza/");
      const jsonData = await result.json();
      console.log(jsonData);
      setData(jsonData.toppizza);
    };

    return (
        <div className="topOffers">
            {loading ? (
        <LoadingMask />
      ) : (
        data.map((toppizza, index) => <TopPizza toppizza={toppizza} key={index} />)
      )}
        </div>
    )
}

export default HorizontalOffers;
