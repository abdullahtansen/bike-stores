import React from "react";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";

const Review = ({ review }) => {
  const { name, rating, description } = review;
  const { user } = useAuth();
  return (
    <div>
      <div className="card">
        <div className="w-100">
          <img className="avatar" src={user.photoURL} alt={name} />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary">{user.displayName}</h2>
          <p className="name">{name}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="rating">
              {[...new Array(5)].map((arr, index) => {
                return index < rating ? (
                  <FontAwesomeIcon
                    icon={faStar}
                    size="lg"
                    style={{ color: "green" }}
                  />
                ) : (
                  <FontAwesomeIcon icon={faStar} size="lg" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
