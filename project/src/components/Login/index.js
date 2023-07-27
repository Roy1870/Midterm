import React, { useState } from "react";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "../../helpers";

const initialUser = { password: "", identifier: "" };    //initialized to an empty string

const Login = () => {
  const [user, setUser] = useState(initialUser);  /*Declare a state variable "user" and its corresponding 
                     setter function "setUser" using the "useState" hook. The initial state of "user" is set to the "initialUser" object*/
  const navigate = useNavigate();   //used to navigate to different routes within the app.



  const handleChange = ({ target }) => {
    const { name, value } = target;     //The function updates the "user" state by merging the new "name" and "value" into the current state using the spread operator
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = 'http://localhost:1337/api/auth/local';
    try {
      if (user.identifier && user.password) {   // Checking if user identifier and password are provided
        const { data } = await axios.post(url, user);  //POST request to the authentication endpoint with the "user" data 
        if (data.jwt) {  //Check if the response data contains a "jwt" property, which indicates a successful login
          storeUser(data);
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <Row className="login"> 
      <Col sm="15" md={{ size: 15, offset: 15 }}>
        <div className="login-form">
          <h2 style={{ fontWeight: 'bold', color:'#FFFFFF' }}>Login:</h2>
          <FormGroup>
            <Input
              type="email"
              name="identifier"
              value={user.identifier}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </FormGroup>
          <Button color="primary" onClick={handleLogin}>
            Login
          </Button>
          <h5 style={{color:'#FFFFFF'}}>
            Click <Link to="/registration">Here</Link> to sign up
          </h5>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
