import React from 'react'
import './Vehicle.css'

const Vehicle = ({name, price, transmission, drive, category, mileage, image}) => {
  return (
    <div>
         <div
           >
            <img src={image} className="card card-img-top" alt="" style={{width: 20 + 'rem', height: 12 + 'rem'}}/>
             <div className="card-body">
               <div className="top">
                 <h4>{category}</h4>
                 <h3>{name}</h3>
                 <h3>Price: ${price}</h3>
               </div>
               <hr/>
               <div className="middle">
                <div>
                   <span className="middle-t">Transmission </span>
                   <span>{transmission}</span>
                </div>
                <div>
                   <span className="middle-t">Drive</span>
                   <span>{drive}</span>
                 </div>
                <div>
                 <span className="middle-t">Mileage</span>
                  <span>{mileage}(Mi)</span>
                </div>
               </div>
             <div className="bottom">
                 <button className="button">View Details</button>
               </div>
             </div>
         </div>
    </div>
  )
}

export default Vehicle