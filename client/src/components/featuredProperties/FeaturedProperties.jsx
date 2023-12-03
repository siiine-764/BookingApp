import React from "react";
import "./FeaturedProperties.css";
import useFetch from "../../hooks/useFetch";

const HomeCard = () => {

  const { data, loading, error } = useFetch("/hotels?featured=true");
  
  return (
    <div className="fp">
    {loading ? ( "Loading" )  : 
    error ? <div>Error: {error.message}</div>  : (
      <>
        {data.map((item) => (
          <div className="fpItem" key={item._id}>
            <img
              src={item.photos[0]}
              alt=""
              className="fpImg"
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>}
          </div>
        ))}
      </>
    )}
  </div>
    );
  };
  
  const FeaturedProperties = () => {
    return (
      <div className="home-list">
          <HomeCard />
        
      </div>
    );
  };

export default FeaturedProperties;