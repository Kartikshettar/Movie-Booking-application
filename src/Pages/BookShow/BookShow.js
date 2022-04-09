/* importing files/dependecies */
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import "./BookShow.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  {Radio} from "antd";
import NumberFormat from "react-number-format";



const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  website: yup.string().url()
});

//ticket booking form
const BookShow = () => {

  const {  register,control, handleSubmit,formState: { errors } }  = useForm({
    resolver: yupResolver(SignupSchema)  
  });


  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
 

  return (
      
    <form className= "container" onSubmit={handleSubmit(onSubmit)}>
      <h1> BOOK Tickets</h1>
      <div>
        <label  className="label">First Name</label>
        <input pattern="[a-zA-Z]*" placeholderText="First Name" {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div style={{ marginBottom: 10 }}>
        <label  className="label">Last Name</label>
        <input pattern="[a-zA-Z]*" placeholderText="Last Name" {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label placeholderText="Age" className="label">Age</label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
`
`
      <div>
        <label className="label" >Movie</label>
        <input {...register("movie")} />
        {errors.movie && <p>{errors.movie.message}</p>}
       
      </div>

      <section>
          <label className="label" placeholderText="Select Data">Date</label>
          <Controller
            control={control}
            name="Book-Date"
            render={({ field }) => (
              <ReactDatePicker
                className="input"
                placeholderText="Select date"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
              />
            )}
          />
        </section>



          <section>
          <label className="label" >Seat</label>
          <Controller
            render={({ field }) => (
              <NumberFormat thousandSeparator {...field} />
            )}
            name="numberOfSeats"
            className="input"
            control={control}
            placeholderText="Seat"
          />
        </section>



<section>
      <label className="label">Seat Preference</label>
      <Controller
        control={control}
        name="AntdRadio"
        render={({ field: { onChange, value } }) => (
          <Radio.Group value={value} onChange={(e) => onChange(e.target.value)}>
            <Radio style={{color:"black"}} value={180}>Platinum-Rs.220</Radio>
            <Radio style={{color:"black"}} value={200}>Gold-Rs.200</Radio>
            <Radio style={{color:"black"}}value={220}>Silver-180</Radio>
            <></>
          </Radio.Group>
        )}
      />
    </section>


      <input  className="button" type="submit" />
    </form>
  );
};

export default BookShow;