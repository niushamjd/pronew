
import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import TransferCard from "../shared/TransferCard"; // Assuming a similar card component for transfers
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch"; // Assuming similar data fetching mechanism
import { BASE_URL } from "../utils/config";

const Transfers = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {
      data: transfers,
      loading,
      error,
    } = useFetch(`${BASE_URL}/transfers?page=${page}`);
    const { data: transferCount } = useFetch(`${BASE_URL}/transfers/search/getTransferCount`);
  
    useEffect(() => {
      const pages = Math.ceil(transferCount / 8);
      setPageCount(pages);
      window.scrollTo(0, 0);
    }, [page, transferCount,transfers]);
    return (
      <>
        <CommonSection title={"All Tours"} />
        <section className="tours__section">
          <Container>
            <Row>
        
            </Row>
          </Container>
        </section>
        <section className="pt-0">
          <Container>
            {loading && <h4 className="text-center pt-5">Loading...</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error && (
              <Row>
                {transfers?.map((transfer) => (
                  <Col lg="3" md='6' sm='6' className="mb-4" key={transfer._id}>
                    <TransferCard transfer={transfer} />
                  </Col>
                ))}
                <Col lg="12">
                  <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                    {[...Array(pageCount).keys()].map((number) => (
                      <span
                        key={number}
                        onClick={() => setPage(number)}
                        className={page === number ? "active__page" : ""}
                      >
                        {number + 1}
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
            )}
          </Container>
        </section>
        <Newsletter />
      </>
    );
  };

export default Transfers;
