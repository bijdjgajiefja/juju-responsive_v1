import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

// import styled from "styled-components";

import { toast } from "react-toastify";
import {
  Label,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
} from "reactstrap";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";
import FormRes from "../components/FormRes";

// const FormRes = styled.form`
//   @media (max-width: 768px) {
//     width: 100%;
//   }

//   @media (max-width: 576px) {
//     width: 100%;
//   }
// `;

const Login = () => {
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  // const handleReset = () => {
  //   setLoginDetail({
  //     username: "",
  //     password: "",
  //   });
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username or Password  is required !!");
      return;
    }

    //submit the data to server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        //save the data to localstorage
        doLogin(data, () => {
          console.log("login detail is saved to localstorage");
          //redirect to user dashboard page
          navigate("/user/dashboard");
        });

        toast.success("Login Success");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
          console.log(error.response.data.message);
        } else {
          toast.error("Something went wrong  on sever !!");
        }
      });
  };

  return (
    <div>
      <section class="banner">
        <div>
          <img src="/images/jujupasal.png" alt="juju logo" />
        </div>
        <div class="credit-card-pay">
          <img src="/images/credit-card.png" alt="credit-card" />
          <img src="/images/credit-card.png" alt="credit-card" />
          <img src="/images/credit-card.png" alt="credit-card" />
          <img src="/images/credit-card.png" alt="credit-card" />
          <img src="/images/credit-card.png" alt="credit-card" />
        </div>
      </section>

      <section class="resident_portal">
        <p>Welcome to Juju-Plaza</p>
        <p>
          Manage and make your monthly payments online by major credit and debit
          <br />
          card for a fee or by e-check (ACH) from your bank acount at no cost to
          you.
        </p>
        <FormRes onSubmit={handleFormSubmit}>
          <div>
            <legend>Secure login</legend>
            <input
              type="email"
              id="email"
              placeholder="Username or Email"
              value={loginDetail.username}
              onChange={(e) => handleChange(e, "username")}
            />
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={loginDetail.password}
              onChange={(e) => handleChange(e, "password")}
            />
            <br />
          </div>
          <div>
            <input type="checkbox" />
            <label for="checkbox">Remember me</label>
            <Link to="/forgot-password">Forgot Password?</Link>
            <br />
          </div>
          <div>
            <Button className="login-button">Login</Button>
          </div>
          <div>
            New User?<Link to="/signup">Register Here</Link>
          </div>
        </FormRes>
      </section>
      <footer class="footer">
        <div>FAQ & Tutorials</div>
        <div>Support Request</div>
        <div>Copyright &copy 2022 ClickPay.All rights reserved.</div>
        <div class="powered-by">
          <Link to="/jujupay">
            <p>Powered By:</p>
            <img src="/images/clickpay.png" alt="clickpay" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Login;
