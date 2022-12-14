import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // const user = {
    //   fname: data.firstName,
    //   lname: data.lastName,
    //   age: data.age,
    // };
    axios.post("https://glacial-lowlands-76878.herokuapp.com/bikes", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
    // console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register("name")} />
        <input placeholder="description" {...register("description")} />
        <input placeholder="price" type="number" {...register("price")} />
        <input placeholder="img" {...register("img")} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddProducts;
