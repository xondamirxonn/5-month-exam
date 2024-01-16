import React, { useState } from 'react'
import bg_img from "../assets/main-bg-img.webp";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()

  const [setting, setSettings] = useState(false);

 

  const Logout = () => {
  localStorage.removeItem("register-token")

  navigate("/login")
  }

  return (
    <div>
      <div className="bg-light p-2 shadow">
        <div className="mx-4 my-2 d-flex justify-content-between">
          <div className="d-flex gap-3 align-items-center">
            <i
              className="fa-solid fa-blog fa-2xl"
              style={{ color: "#1c81ce" }}
            ></i>
            <button className="btn btn-info rounded-5 px-3">+ New</button>
          </div>
          <div>
            <input
              className="form-control w-auto"
              type="text"
              placeholder="Search group and join"
            />
          </div>
          <div className="d-flex gap-3 align-items-center">
            <button className="btn btn-light rounded-circle">
              <i className="fa-solid fa-rotate"></i>
            </button>
            <div>
              <button className="btn btn-light rounded-circle ">
                <i className="fa-regular fa-bell"></i>
              </button>
              <span
                className="bg-danger rounded-5 text-white px-2 "
                style={{ marginLeft: "-.8rem" }}
              >
                +9
              </span>
            </div>
            <button
              onClick={() => setSettings(!setting)}
              className="btn btn-light"
            >
              <i className="fa-solid fa-gear position-relative"></i>
            </button>
          </div>
        </div>
      </div>
      {setting ? (
        <div
          className="bg-light p-2 rounded-2 px-5 position-absolute  shadow"
          style={{ top: "3.5rem", right: "2.5rem" }}
        >
          <button className="btn" onClick={Logout}>Log out</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header