import React from "react";
import "./Featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london");
  
    console.log(data);
    return (
        <div className="featured">
            {
                loading ? ("loading please wait")  : 
                error ? <div>Error: {error.message}</div> : ( <>

            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/579739.jpg?k=210a39c70f4d63a2cde9b2cf09cadbf5b9abfebf992fa2efa4f107ccf3cfd815&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                     <h1>Berlin 🇩🇪</h1>
                     <h2>{data[0]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/579739.jpg?k=210a39c70f4d63a2cde9b2cf09cadbf5b9abfebf992fa2efa4f107ccf3cfd815&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                     <h1>Madrid 🇪🇸</h1>
                     <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/579739.jpg?k=210a39c70f4d63a2cde9b2cf09cadbf5b9abfebf992fa2efa4f107ccf3cfd815&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                     <h1>London 🇬🇧</h1>
                     <h2>{data[2]} properties</h2>
                </div>
            </div>
            </>)
            }
        </div>
    )
}

export default Featured;