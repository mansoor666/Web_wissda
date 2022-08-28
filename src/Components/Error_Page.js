import React from "react";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";
import Error_Image from "../img/error.png";

const Error_Page = () => {
  return (
    <Wrapper>
      <img src={Error_Image} alt="error" />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: red;
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
    color: white;
    background-color: red;
  }
`;

export default Error_Page;
