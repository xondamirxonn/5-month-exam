import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { localTokenKey } from "../contstans";

function Header() {
  const navigate = useNavigate();

  const [setting, setSettings] = useState(false);
  const [bellActive, setBellActive] = useState(false);
  const [gear, setGear] = useState(false);

  const Uptated = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2_000);

    toast("The site has been updated", { type: "success", theme: "colored" });
  };

  const Logout = () => {
    localStorage.removeItem(localTokenKey);

    navigate("/login");
  };

  const Bell = () => {
    setBellActive(!bellActive)
  }

   const Gear = () => {
     setGear(!gear)
   };

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
            <button className="btn btn-primary rounded-5 px-3">+ New</button>
          </div>
          <div>
            <input
              className="form-control w-auto"
              type="text"
              placeholder="Search group and join"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="d-flex gap-3 align-items-center">
            <button onClick={Uptated} className="btn btn-light rounded-circle">
              <i className="fa-solid fa-rotate"></i>
            </button>
            <div>
              <button
                // className="btn btn-light rounded-circle "
                onClick={Bell}
                className={`btn btn-light rounded-circle ${
                  bellActive ? "fa-shake" : ""
                }`}
              >
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
              <i
                onClick={Gear}
                className={` fa-solid fa-gear position-relative ${
                  gear ? "fa-shake" : ""
                }`}
                // className="fa-solid fa-gear position-relative"
              ></i>
            </button>
          </div>
        </div>
      </div>
      {setting ? (
        <div
          className="bg-light p-2 rounded-2 px-5 position-absolute z-3 shadow"
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
