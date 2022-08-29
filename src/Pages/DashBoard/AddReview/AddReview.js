import React from "react";
import { useForm } from "react-hook-form";
import './AddReview.css';
import { Form, Container } from 'react-bootstrap';

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
   <Container className='ReviewContainer'>
     <Form onSubmit={handleSubmit(onSubmit)} className='review_section'>
     <Form.Group>
     <input className='input_type' placeholder='Enter your Product Name' type="text" {...register("name")} />
     </Form.Group>
    <Form.Group>
        <input placeholder='Rating Number' className='input_type' type="number" {...register("rating")} />
    </Form.Group>
    <Form.Group>
    <input placeholder='Description' className='input_type' type="text" {...register("description")} />
    </Form.Group>
      <input className="buttoned" type="submit" />
    </Form>
   </Container>
  );
};

export default AddReview;
