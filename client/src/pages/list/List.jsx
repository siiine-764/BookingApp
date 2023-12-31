import React from "react";
import "./List.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/footer/Footer";

const List = () => {
    const location = useLocation();
    const [destination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [option] = useState(location.state.option);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    
    const { data, loading, error, reFetch } = useFetch(
        `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}` 
      );
    
    const handleClick = () => {
        reFetch();
    }
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
                                    <input type="number" onChange={e=>setMin(e.target.value)}  className="lsOptionInput" />
                                    </div>
                                    
                                    <div className="lsOptionItem">
                                    
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" onChange={e=>setMax(e.target.value)}  className="lsOptionInput" />
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
                            <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="listResult">
            {loading ? ( "loading" ) :
                error ? <div>Error: {error.message}</div> :
             (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default List;