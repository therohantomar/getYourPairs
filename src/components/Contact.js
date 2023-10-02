import { Field, Form, Formik } from "formik";
import feedback from "../images/Feedback-bro.png"

const Contact = () => {

  return (
    <div className="min-h-screen flex flex-wrap items-center justify-center  w-full  bg-white">
      <Formik
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          console.log(typeof(values.phone),values.phone)
          if(!values.phone){
            errors.phone="Required"
          }
          else if(typeof(values.phone)!=="number"){
            errors.phone="Should be number"
          }
          else{
            errors.phone=null
          }

          return errors;
        }}
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        onSubmit={(values)=>{
          console.log(values)
        }}
      >
        {({ errors, touched, validateField, validateForm }) => (
          <Form className="flex flex-col  shadow-xl p-8 xl:w-1/2 2xl:w-1/2 lg:w-4/6 md:w-5/6 sm:w-11/12 xs:w-full  gap-2 ">
            <h1 className="font-ubuntu text-2xl font-bold text-gray-500 my-10">Your Valueable Feedback Here </h1>
           <label className="text-black ">Name:</label>
            <Field
              name="name"
              placeholder="Your name here"
              className="input my-2 input-accent "
            />
           <label className="text-black ">Email:</label>

            <Field
              name="email"
              placeholder="Your email here"
              className="input my-2 input-accent "
            />
            {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
           <label className="text-black ">Contact Number:</label>
            
            <Field
              name="phone"
              type="number"
              pattern="[0-9]"
              placeholder="Your Phone Number please"
              className="input my-2 hidden-spinner hidden-spinner-moz cursor-none input-accent "
              inputmode="numeric"
            />
            {errors.phone && touched.phone && <div className="text-red-500">{errors.phone}</div>}
            <label className="text-black ">Feedback:</label>

            <Field
              name="message"
              as="textarea"
              placeholder="Your message here"
              className="input my-2 input-accent "
            />
            <button type="submit" className="btn btn-warning my-4">
              submit
            </button>
          </Form>
        )}
      </Formik>
      <img src={feedback} alt="feedback"  className="xl:w-1/2 2xl:w-1/2 lg:w-4/6 md:w-5/6 sm:w-11/12 xs:w-full"  />
    </div>
  );
};

export default Contact;
