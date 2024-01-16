import React, { useEffect, useState,useContext } from "react";
import "../styles/transfer-details.css"; // Updated CSS file for transfer details
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import TransferBooking from "../components/Booking/TransferBooking";
import { AuthContext } from "../context/AuthContext";

const TransferDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  // Fetch data from the database
  const { data: transfer, loading, error } = useFetch(`${BASE_URL}/transfers/${id}`);
  const {
    origin,
    price,
    carType,
    destination,
    passengers
  } = transfer;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [transfer]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="transfer__content">
                  <img src={carType} alt={origin} />

                  <div className="transfer__info">
                    <h2>{origin }-{destination}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span>
                        <i class="ri-map-pin-user-fill"></i> Until {passengers} person
                      </span>
                    </div>
                    <div className="transfer__extra-details">
                      <span>
                        <i class="ri-map-pin-2-line"></i> {origin}
                      </span>
                      <span>
                        <i class="ri-money-euro-circle-line"></i> {price} /per transfer
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>Enjoy a seamless and private transfer experience with our Volkswagen Caravella cars, known for their comfort and style. Our service is dedicated to providing you with a personal and efficient journey, ensuring that you reach your destination relaxed and on time. Whether you're traveling from the airport to your hotel or between cities, our private transfers offer the exclusivity and convenience you deserve. Book with us and travel with confidence, knowing that we prioritize your satisfaction and safety.</p>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <TransferBooking transfer={transfer} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TransferDetails;
