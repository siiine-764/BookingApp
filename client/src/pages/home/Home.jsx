import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer";

const Home = () => {
    // Example data for homes
    // const homesData = [
    //     {
    //       fpName: 'Cozy Cottage',
    //       fpCity: 'Lisbon',
    //       description: 'A charming cottage in the heart of the countryside.',
    //       imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=',
    //       price: 100,
    //     },
    //     {
    //         fpName: 'Hilton Garden Inn',
    //         fpCity: 'Berlin',
    //         description: 'A charming cottage in the heart of the countryside.',
    //         imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o=',
    //         price: 88,
    //     },
    //     {
    //         fpName: 'Hilton Garden Inn',
    //         fpCity: 'Berlin',
    //         description: 'A charming cottage in the heart of the countryside.',
    //         imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o=',
    //         price: 88,
    //     },
    //     {
    //         fpName: 'Hilton Garden Inn',
    //         fpCity: 'Berlin',
    //         description: 'A charming cottage in the heart of the countryside.',
    //         imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o=',
    //         price: 88,
    //     },
    //   ];
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <h1 className="homeTitle">Trending destinations</h1>
                <h3 className="homeTitle">Most popular choices for travellers from Morocco</h3>
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Stay at our top unique properties</h1>
                {/* <FeaturedProperties  homes={homesData}/> */}
                <FeaturedProperties />
                <h1 className="homeTitle">Subscribe to our newsletter</h1>
                <MailList />
                <Footer />
            </div>
        </div>
    );
}

export default Home;