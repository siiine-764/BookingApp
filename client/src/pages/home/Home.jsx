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