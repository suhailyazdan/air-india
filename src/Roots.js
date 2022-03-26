import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from "./App"
import Home from "./containers/Home";
import ManageTrip from "./containers/ManageTrip";
import SpecialOffers from './containers/SpecialOffers';
import TravelInfo from './containers/TravelInfo';
import FlyingReturn from './containers/FlyingReturns';
import Baggage from './containers/Baggage';
import Contact from './containers/Contact';
import GST from './containers/GST';


const Roots = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/manage-trip" element={<ManageTrip />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/travel-info" element={<TravelInfo />} />
        <Route path="/flying-return" element={<FlyingReturn />} />
        <Route path="/baggage" element={<Baggage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gst" element={<GST />} />
      </Route>
    </Routes>
  )
}

export default Roots