import { Link } from "react-router-dom";
import "./Signup.css";
import { signUp } from "../services/user-service";
import { useState } from "react";
import { toast } from "react-toastify";

import FormRes from "../components/FormRes";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  //handle change
  const handleChange = (event, property) => {
    //property: fields like name, email, pswd and about
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber: "",
    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    // if(error.isError){
    //   toast.error("Form data is invalid , correct all details then submit. ");
    //   setError({...error,isError:false})
    //   return;
    // }

    console.log(data);
    //data validate

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("User is registered successfully !!");
        setData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          contactNumber: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <div>
      <section className="banner">
        <div>
          <img src="/images/jujupasal.png" alt="werber logo" />
        </div>
        <div className="credit-card-pay">
          <img src="assets/credit-card.png" alt="credit-card" />
          <img src="assets/credit-card.png" alt="credit-card" />
          <img src="assets/credit-card.png" alt="credit-card" />
          <img src="assets/credit-card.png" alt="credit-card" />
          <img src="assets/credit-card.png" alt="credit-card" />
        </div>
      </section>

      <section className="resident_portal">
        <p>Welcome to Juju-Plaza Resident Portal</p>
        <p>
          Manage and make your monthly payments online by major credit and debit
          <br />
          card for a fee or by e-check (ACH) from your bank acount at no cost to
          you.
        </p>
        <FormRes onSubmit={submitForm}>
          <div>
            <legend>Secure Signup</legend>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              onChange={(e) => handleChange(e, "name")}
              value={data.name}
              invalid={error.errors?.response?.data?.name ? true : false}
            />
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Eamil Id"
              onChange={(e) => handleChange(e, "email")}
              value={data.email}
              invalid={error.errors?.response?.data?.email ? true : false}
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              onChange={(e) => handleChange(e, "password")}
              value={data.password}
              invalid={error.errors?.response?.data?.password ? true : false}
            />
            <br />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Your Password"
              onChange={(e) => handleChange(e, "confirmPassword")}
              value={data.confirmPassword}
              invalid={
                error.errors?.response?.data?.confirmPassword ? true : false
              }
            />
            <br />
            <input
              type="text"
              name="contactNumber"
              id="contactNumber"
              placeholder="Your Contact No."
              onChange={(e) => handleChange(e, "contactNumber")}
              value={data.contactNumber}
              invalid={
                error.errors?.response?.data?.contactNumber ? true : false
              }
            />
            <br />
          </div>
          <div>
            <Button
              className="register-button"
              outline
              color="light"
              type="submit"
            >
              Register
            </Button>
            <Button
              onClick={resetData}
              color="secondary"
              type="reset"
              className="clear-button ms-2"
            >
              Clear
            </Button>
          </div>
        </FormRes>
      </section>
      <footer className="footer">
        <div>FAQ & Tutorials</div>
        <div>Support Request</div>
        <div>Copyright &copy 2022 JujuPay.All rights reserved.</div>
        <div className="powered-by">
          <a href="#">
            <p>Powered By:</p>
            <img src="assets/clickpay.png" alt="clickpay" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
