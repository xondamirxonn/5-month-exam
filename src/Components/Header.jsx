import React, { useState } from "react";
import bg_img from "../assets/main-bg-img.webp";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

function Header() {
  const navigate = useNavigate();

  const [setting, setSettings] = useState(false);
 
  const Logout = () => {
    localStorage.removeItem("register-token");

    navigate("/login");
  };

  let { data: searchs } = useFetch("/search");
  return (
    <div>
      <div className="bg-light p-2 shadow position-sticky z-1">
        <div className="mx-4 my-2 d-flex justify-content-between">
          <div className="d-flex gap-3 align-items-center">
            <Link
              to="/main"
              className="fa-solid fa-blog fa-2xl text-decoration-none"
              style={{ color: "#1c81ce" }}
            ></Link>
            <button className="btn btn-info rounded-5 px-3">+ New</button>
          </div>
          <div>
            <input 
              className="form-control w-auto"
              type="text"
              placeholder="Search group and join"
              // value={search}
              // onChange={handleSearch}
            />
          </div>
          <div className="d-flex gap-3 align-items-center">
            <button
              onClick={() => window.location.reload()}
              className="btn btn-light rounded-circle"
            >
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
          className="bg-light p-2 rounded-2 px-5 position-absolute z-1 shadow"
          style={{ top: "3.5rem", right: "2.5rem" }}
        >
          <button className="btn " onClick={Logout}>
            Log out
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
