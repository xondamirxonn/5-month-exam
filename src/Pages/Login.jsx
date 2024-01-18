import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { localTokenKey, reqTokenHederKey } from "../contstans";
import { Spinner } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const FormLogin = async (e) => {
    e.preventDefault();
    if (!username)
      return toast("Username is required", { type: "error", theme: "colored" });
    if (!password)
      return toast("Password is required", { type: "error", theme: "colored" });
    if (password.length < 6)
      return toast("must be at least 6 characters long", {
        type: "error",
        theme: "colored",
      });
    try {
      let {
        data: { token },
      } = await axios.post("/auth", {
        username,
        password,
      });
      localStorage.setItem(localTokenKey, token);

      toast("Logged in successfully", { type: "success", theme: "colored" });
      axios.defaults.headers.common[reqTokenHederKey] = token;
      navigate("/main");
      console.log(data);
    } catch (error) {
      if (error.response.status === 404) {
        console.log(error);
        toast(error.response.data.message, { type: "error", theme: "colored" });
      }
    }
  };

  return (
    <div className="bg-secondary  p-5" style={{ height: "100vh" }}>
      <div
        className="rounded-4 d-flex my-5"
        style={{ border: "1px solid transparent" }}
      >
        <div
          className="bg-dark w-50 d-grid justify-content-center pb-5"
          style={{
            borderTopLeftRadius: ".9rem",
            borderBottomLeftRadius: ".9rem",
          }}
        >
          <div className=" text-center  rounded-3   ">
            <i
              className="fa-solid fa-blog fa-6x my-5"
              style={{ color: "#1c81ce" }}
            ></i>
            <p className="text-white">Welcome to</p>
            <h1 className="display-1 text-white">Shopping list</h1>
          </div>
        </div>
        <div
          className="w-50 bg-white "
          style={{
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <h2 className="text-center my-5">Login</h2>
          <form
            onSubmit={FormLogin}
            className="d-grid align-items-center mx-5"
            style={{ marginTop: "-3rem" }}
          >
            <label htmlFor="username" className="my-3">
              UserName
            </label>
            <input
              className="form-control w-100"
              type="text"
              placeholder="Your username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password" className="my-3">
              Password
            </label>
            <input
              className="form-control w-100 "
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-success w-100 my-3">Submit</button>
            <span className="pb-2">
              Don't have an account yet? <Link to="/register">Sign Up</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
