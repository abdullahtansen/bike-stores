import React from "react";
import {SwiperSlide } from "swiper/react";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import './Review.css'

const Review = ({ review }) => {
  const { name, rating, description } = review;
  const { user } = useAuth();
  return (
    <div>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      > */}
        <SwiperSlide>
          <div className="card mt-2">
            <figure>
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} alt={name} />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary">{user.displayName}</h2>
              <p>{name}</p>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <div className="rating">
                  {[...new Array(5)].map((arr, index) => {
                    return index < rating ? (
                      <FontAwesomeIcon icon={faStar} size="lg" style={{color:'orange'}} />
                    ) : (
                      <FontAwesomeIcon icon={faStar} size="lg" />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      {/* </Swiper> */}
    </div>
  );
};

export default Review;
