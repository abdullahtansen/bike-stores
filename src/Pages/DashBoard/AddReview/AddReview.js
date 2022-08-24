import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    const review = {
        name: data.name,
        rating: data.rating,
        description: data.description,
    };
    fetch("http://localhost:5000/reviews", {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          alert("Add A Review");
          reset();
        });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name' type="text" {...register("name")} />
      <input placeholder='Rating Number' type="number" {...register("rating")} />
      <input placeholder='Description' type="text" {...register("description")} />
      <input type="submit" />
    </form>
  );
};

export default AddReview;
