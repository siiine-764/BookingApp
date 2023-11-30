import React from "react";
import "./List.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
    const location = useLocation();
    const [destination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [option] = useState(location.state.option);

        // Example data for homes
        const listHotels = [
            {
              idHotel: 1,
              fpCity: 'Lisbon',
              siTitle: 'Tower Street Apartments',
              siDistance: '500m from center',
              siTaxiOp: 'Free airport taxi',
              siFeatures: 'Entire studio • 1 bathroom • 21m² 1 full bed',
              siSubtitle: 'Studio Apartment with Air conditioning',
              siCancelOp: 'Free cancellation',
              siCancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
              imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=',
              siScore:8.9,
              siRating: 'Excellent',
              siPrice: '$122',
              siTaxOp: 'Includes taxes and fees',
            },
            // Add more home objects as needed
            {
                idHotel: 2,
                fpCity: 'Lisbon',
                siTitle: 'Tower Street Apartments',
                siDistance: '500m from center',
                siTaxiOp: 'Free airport taxi',
                siFeatures: 'Entire studio • 1 bathroom • 21m² 1 full bed',
                siSubtitle: 'Studio Apartment with Air conditioning',
                siCancelOp: 'Free cancellation',
                siCancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
                imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=',
                siScore:8.9,
                siRating: 'Excellent',
                siPrice: '$122',
                siTaxOp: 'Includes taxes and fees',
              },
              {
                idHotel: 3,
                fpCity: 'Lisbon',
                siTitle: 'Tower Street Apartments',
                siDistance: '500m from center',
                siTaxiOp: 'Free airport taxi',
                siFeatures: 'Entire studio • 1 bathroom • 21m² 1 full bed',
                siSubtitle: 'Studio Apartment with Air conditioning',
                siCancelOp: 'Free cancellation',
                siCancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
                imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=',
                siScore:8.9,
                siRating: 'Excellent',
                siPrice: '$122',
                siTaxOp: 'Includes taxes and fees',
              },
          ];
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                         <h1 className="lsTitle">Search</h1>
                         <div className="lsItem">
                                 <label>Check-in Date</label>
                                 <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                     date[0].startDate,
                                     "MM/dd/yyyy"
                                 )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                 {openDate && (
                                     <DateRange
                                     onChange={(item) => setDate([item.selection])}
                                     minDate={new Date()}
                                     ranges={date}
                                     />
                                 )}
                         </div>
                         <div className="lsItem">
                                <label>Destination</label>
                                <input placeholder={destination} type="text" />
                            </div>
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptions">
                                    <div className="lsOptionItem">

                                    <span className="lsOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                    </div>
                                    
                                    <div className="lsOptionItem">
                                    
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                    </div>
                                    <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={option.adult}
                                    />
                                    </div>

                                    <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={option.children}
                  />
                                </div> 
                <div className="lsOptionItem">

                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={option.room}
                  />
                </div>
                    </div>
                        </div>
                            <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem hotels={listHotels}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;