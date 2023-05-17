import React from 'react';
import Vehicle from '../Vehicle/Vehicle'
import './Listing.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from "framer-motion"


const Listings = ({vehicleList}) => {
  const transition = {type: 'spring', duration: 3}
  

  return (
    <div className="listings-container">
      <h3>Popular Listings</h3>
      <div>
        <span className="stroke-text">View </span>
        <span>Top Featured </span>
        <span className="stroke-text">Listings</span>
      </div>
      <div className="container car" >
        {vehicleList.map((listing)=>(

          <Vehicle key={listing.id} id={listing.id} image={listing.image} category={listing.category}
           name={listing.name} price={listing.price} transmission={listing.transmission} drive={listing.drive} mileage={listing.mileage}/>
        ))}
      </div>
      
    </div>
  )
}

export default Listings