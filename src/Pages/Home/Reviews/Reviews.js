import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import { Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data));
    } ,[]);
    const newReviews =[...reviews].reverse();
    return (
        <div>
            <h2>Reviews</h2>
            <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
          {newReviews.map((review,index) => (
                <Review review={review} key={review._id}/>
            ))};
          </Swiper>
        </div>
    );
};

export default Reviews;