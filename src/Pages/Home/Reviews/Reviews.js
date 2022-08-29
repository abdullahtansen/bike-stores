import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "swiper/css";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";
import './Reviews.css';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://glacial-lowlands-76878.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const newReviews = [...reviews].reverse();
  return (
    <div>
      <h2 className='reviews-title'>Reviews</h2>
      <Swiper 
       
       effect={"coverflow"}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={"auto"}
       coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={{clickable : true}}
       modules={[EffectCoverflow, Pagination]}
       className="mySwiper"
      >
        {newReviews.map((review, index) => (
          <SwiperSlide key={index} style={{width:"390px"}}>
            <Review review={review} key={index}></Review>
          </SwiperSlide>
        ))}
        ;
      </Swiper>
    </div>
  );
};

export default Reviews;
