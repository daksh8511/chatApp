import React, { useState } from "react";
import styled from "styled-components";

import assets from "../../../public/assets/assets";

import background from "/assets/background.png";

import { signUp, login } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(currentState == 'Sign Up'){
      signUp(username, email, password)
      setUsername('')
      setEmail('')
      setPassword('')
    }else{
      login(email, password)
    }
  };


  return (
    <LoginPage className="min-h-screen bg-cover flex items-center justify-evenly">
      <img src={assets.logo_big} className="logo" alt="" />

      <form
        onSubmit={onSubmitHandler}
        action=""
        className=" bg-white px-[30px] py-[20px] flex flex-col gap-5 rounded-2xl"
      >
        <h2 className="font-medium text-2xl">{currentState}</h2>
        {currentState === "Sign Up" ? (
          <input
            type="text"
            className="px-2 py-2.5 border border-[#c9c9c9] outline-[#c9c9c9]"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        ) : null}

        <input
          type="email"
          className="px-2 py-2.5 border border-[#c9c9c9] outline-[#c9c9c9]"
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="px-2 py-2.5 border border-[#c9c9c9] outline-[#c9c9c9]"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="submit"
          className="p-2.5 bg-[#077eff] text-white font-bold border-0"
        >
          {currentState == "Sign Up" ? "Create Account" : "Sign In"}
        </button>

        <div className="flex items-center gap-1 text-[12px] text-[#808080]">
          <input type="checkbox" />
          <p>Agree to the term of use & privacy policy.</p>
        </div>
        <div className="flex flex-col gap-1">
          {currentState == "Sign Up" ? (
            <p className="text-[13px] text-[#5c5c5c]">
              Already have an account?{" "}
              <span
                onClick={() => setCurrentState("Log In")}
                className="text-[#077eff] cursor-pointer font-bold"
              >
                Click Here
              </span>
            </p>
          ) : (
            <p className="text-[13px] text-[#5c5c5c]">
              Create an account?{" "}
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="text-[#077eff] cursor-pointer font-bold"
              >
                Login Here!
              </span>
            </p>
          )}
        </div>
      </form>
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled.section`
  background: url(${background}) no-repeat;

  .logo {
    width: max(20vw, 200px);
  }
`;
