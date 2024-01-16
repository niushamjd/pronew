import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./transfer-card.css"; // Assuming a separate CSS file for transfer cards

const TransferCard = ({ transfer }) => {
  const { _id, origin, destination, price, photo  } = transfer;
  return (
    <div className="transfer__card">
      <Card>    
        <div className="transfer__img">
        
          <img src={photo} alt="transfer-img" />
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="transfer__location d-flex align-items-center gap-1 ">
              <i class="ri-map-pin-line"></i> {origin} to {destination}
            </span>
          </div>

          <h5 className="transfer__title">
            <Link to={`/transfers/${_id}`}>{destination}</Link>
          </h5>
          <div className="transfer__details mt-3">
          </div>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
            €{price} <span>/until 8 person</span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/transfers/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TransferCard;
