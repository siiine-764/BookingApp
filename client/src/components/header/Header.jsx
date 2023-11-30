import React from 'react';
import {useState} from 'react';
import { DateRange } from 'react-date-range';
import "./Header.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faCab, faCakeCandles, faPerson, faPlane , faTaxi } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";

const Header = ({type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpendate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [option, setOptions] = useState({
        
        adult: 1,
        children: 0, 
        room: 1,
    });
    const [date, setDate] = useState([ 
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, option } });
      };
    
    return (
        <div>
            <div className="header">
                <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                    {/* part headerList*/}
                    <div className="headerList">
                        <div className="headerListItem">
                            <div className="headerList">
                                <div className="headerListItem active">
                                    <FontAwesomeIcon icon={faBed} />
                                    <span>Stays</span>
                                </div>
                                <div className="headerListItem">
                                    <FontAwesomeIcon icon={faPlane} />
                                    <span>Flights</span>
                                </div>
                                <div className="headerListItem">
                                    <FontAwesomeIcon icon={faCab} />
                                    <span>Car rentals</span>
                                </div>
                                <div className="headerListItem">
                                    <FontAwesomeIcon icon={faBed} />
                                    <span>Attractions</span>
                                </div>
                                <div className="headerListItem">
                                    <FontAwesomeIcon icon={faTaxi} />
                                    <span>Airport taxis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end part headerList*/}

            {/* part search*/}
        {type !== "list" && <>
             <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCakeCandles} className="headerIcon" />
                    <span onClick={()=>setOpendate(!openDate)} className="headerSearchText">
                        {`${format(date[0].startDate, "MM/dd/yyyy")}
                        to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                    </span>
                        { openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className="headerSearchText"
                        onClick={()=>setOpenOptions(!openOptions)}>
                        {option.adult} Adult, {option.children} Children, {option.room} Room
                    {openOptions &&  
                    <div className="options"  editableDateInputs={true}>
                        <div className="optionsItem">
                            <span className="optionText">
                                Adult
                            </span>
                            <span className="optionBtn">
                                <button 
                                className="optionCounterButton"
                                onClick={()=>setOptions({...option, adult: option.adult + 1})}>+</button>
                                <span>{option.adult}</span>
                                <button 
                                className="optionCounterButton"
                                disabled={option.adult <= 1}
                                onClick={()=>setOptions({...option, adult: option.adult - 1})}>-</button>
                            </span>
                        </div>
                            <div className="optionsItem">
                            <span className="optionText">
                                Children
                            </span>
                            <span className="optionBtn">
                                <button
                                className="optionCounterButton"
                                onClick={()=>setOptions({...option, children: option.children + 1})}>+</button>
                                <span>{option.children}</span>
                                <button
                                className="optionCounterButton"
                                disabled={option.children <= 0}
                                onClick={()=>setOptions({...option, children: option.children - 1})}>-</button>
                            </span>
                        </div>
                            <div className="optionsItem">
                                <span className="optionText">
                                    Room
                                </span>
                                <span className="optionBtn">
                                    <button
                                    className="optionCounterButton"
                                    onClick={()=>setOptions({...option, room: option.room + 1})}>+</button>
                                    <span>{option.room}</span>
                                    <button
                                    className="optionCounterButton"
                                    disabled={option.room <= 1}
                                    onClick={()=>setOptions({...option, room: option.room - 1})}>-</button>
                                </span>
                            </div>
                    </div>}
                    </span>
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch} >Search</button>
                </div>  
                {/* end part search*/}
            </div>
            </>}
                </div> 
            </div>
        </div>
    );
}

export default Header;