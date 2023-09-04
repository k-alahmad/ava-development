import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes>
        <html lang="en" />
        <meta name="title" content="Ava Real Estate" />
        <meta
          name="description"
          content="Explore premium properties in Dubai with AVA Real Estate, your trusted brokerage agency. Discover exquisite homes, apartments, and commercial spaces for buy or rent. Our expert agents ensure a seamless real estate experience, guiding you through the vibrant Dubai market."
        />
        <meta
          name="keywords"
          content="Dubai Real Estate, Brokerage Agency, Property Listings, Homes for Sale, Apartments for Rent, Commercial Spaces, Expert Agents, Dubai Property Market, AVA Real Estate Dubai, offplan, Dubai properties, properties for sale Dubai, apartements for sale duabi, best real estate agency, buy apartment in dubai, buy home in dubai, buy home with installment, home investment, invest in properties Dubai"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="./src/assets/logos/AVA-Logo.svg"
        />
      </Helmet>
      <div>
        <Header />
      </div>
    </>
  );
};

export default HomePage;
