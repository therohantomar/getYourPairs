import { Field, Form, Formik } from "formik";
import { useRef } from "react";
import feedback from "../images/Feedback-bro.png";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
const Contact = () => {
  const form = useRef();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("hi, I'm clicked");
    setSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICES,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\d+$/.test(values.phone)) {
      errors.phone = "Should be a number";
    }

    return errors;
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  return (
    <div className="max-h-screen flex flex-wrap items-center justify-center w-full bg-white">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form ref={form} className="flex flex-col shadow-xl px-8 xl:w-1/2 2xl:w-1/2 lg:w-4/6 md:w-5/6 sm:w-11/12 xs:w-full gap-2">
            <h1 className="font-ubuntu text-2xl font-bold text-gray-500 my-10">
              Your Valuable Feedback Here
            </h1>
            <label className="text-black">Name:</label>
            <Field
              type="text"
              name="name"
              placeholder="Your name here"
              className="input my-2 input-accent"
            />
            <label className="text-black">Email:</label>
            <Field
              type="email"
              name="email"
              placeholder="Your email here"
              className="input my-2 input-accent"
            />
            {errors.email && touched.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
            <label className="text-black">Contact Number:</label>
            <Field
              type="number"
              name="phone"
              placeholder="Your Phone Number please"
              className="input my-2 hidden-spinner hidden-spinner-moz cursor-none input-accent"
            />
            {errors.phone && touched.phone && (
              <div className="text-red-500">{errors.phone}</div>
            )}
            <label className="text-black">Feedback:</label>
            <Field
              as="textarea"
              name="message"
              placeholder="Your message here"
              className="input my-2 input-accent"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-warning my-4"
            >
            <Link to="/">
              Submit
              </Link>
            </button>
          </Form>
        )}
      </Formik>
      <img
        src={feedback}
        alt="feedback"
        className="xl:w-1/2 h-max 2xl:w-1/2 lg:w-4/6 md:w-5/6 sm:w-11/12 xs:w-full"
      />
    </div>
  );
};

export default Contact;