import React from "react";
import { useState } from "react";
import authStore from "../../stores/authStore";

// ** styles
import { Wrapper, UserInput, PasswordInput, SubmitBtn } from "./styles";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handlechnage = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authStore.register(user);
  };
  return (
    <div>
      <Wrapper>
        <UserInput onChange={handlechnage} name="username"></UserInput>
        <PasswordInput onChange={handlechnage} name="password"></PasswordInput>
        <SubmitBtn onClick={handleSubmit}>Register</SubmitBtn>
      </Wrapper>
    </div>
  );
};

export default Register;
