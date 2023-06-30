import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          I can't say enough about this travel agency. They made my trip to
          Alanya unforgettable. The tour of the ancient city was fascinating,
          the airport transfers were smooth and efficient, and their
          point-to-point service allowed me to make the most of my time
          exploring the region. If you're looking for a reliable, professional,
          and friendly tour and transfer service in Alanya, look no further.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Our family has used this travel agency for airport transfers and day
          tours in the Alanya region, and we couldn't be more pleased. The
          drivers are always on time and the tour guides are wonderful - they
          really know their stuff and make each place come alive. The
          point-to-point service is so convenient, it takes all the stress out
          of travel. We won't use any other company on our visits to Alanya
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Ulrik</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Это туристическое агентство сделало мое пребывание в Аланье
          незабываемым. Они предоставили потрясающие туры по древним городам, а
          также эффективный и плавный трансфер из аэропорта. Их услуги по
          перемещению из точки в точку позволили мне насладиться каждой минутой
          моего пребывания в регионе. Если вы ищете надежное, профессиональное и
          дружелюбное туристическое агентство в Аланье, то вам сюда.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> София, Россия </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Это туристическое агентство сделало мое пребывание в Аланье
          незабываемым. Они предоставили потрясающие туры по древним городам, а
          также эффективный и плавный трансфер из аэропорта. Их услуги по
          перемещению из точки в точку позволили мне насладиться каждой минутой
          моего пребывания в регионе. Если вы ищете надежное, профессиональное и
          дружелюбное туристическое агентство в Аланье, то вам сюда.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> София, Россия </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
