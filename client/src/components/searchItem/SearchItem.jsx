import React from "react";
import "./SearchItem.css"
import { useNavigate } from "react-router-dom";

const HotelCard = ({hotel}) => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/:{hotel.idHotel}", { state: { hotel } });
  };
    return(
        <div className="searchItem">
        <img
          src={hotel.imageUrl}
          alt=""
          className="siImg"
          />
          <p>{hotel.idHotel}</p>
        <div className="siDesc">
          <h1 className="siTitle">{hotel.siTitle}</h1>
          <span className="siDistance">{hotel.siDistance}</span>
          <span className="siTaxiOp">{hotel.siTaxiOp}</span>
          <span className="siSubtitle">
            {hotel.siSubtitle}
          </span>
          <span className="siFeatures">
            {hotel.siFeatures}
          </span>
          <span className="siCancelOp">{hotel.siCancelOp}</span>
          <span className="siCancelOpSubtitle">
            {hotel.siCancelOpSubtitle}
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>{hotel.siRating}</span>
            <button>{hotel.siScore}</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">{hotel.siPrice}</span>
            <span className="siTaxOp">{hotel.siTaxOp}</span>
            <a href="/hotels/:{hotel.idHotel}" onClick={handleSearch} className="siCheckButton">See availability</a>
          </div>
        </div>
      </div>
    )
}
const SearchItem = ({ hotels }) => {
    return (
        <>
            {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
            ))}
        </>
    )

}

export default SearchItem;
