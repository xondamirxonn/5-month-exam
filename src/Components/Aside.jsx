import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Aside.css";

function Aside() {
  const [groups, setGroups] = useState(false)
  return (
    <div className="bg-light z-n1 position-fixed shadow w-25">
      <div className="my-2 mx-3" style={{ height: "100vh" }}>
        <button className="btn btn-light w-100 ">
          <Link
            className="text-decoration-none text-black profilehover"
            to="/main"
          >
            <i className="fa-solid fa-user" style={{ color: "#2753a0" }}></i>{" "}
            Profile
          </Link>
        </button>
        <button
          className="btn btn-light w-100"
          onClick={() => setGroups(!groups)}
        >
          <i className="fa-regular fa-comments"></i> Groups
        </button>
        {groups ? (
          <ul className="list-unstyled">
            <li>
              <button className="btn btn-light w-100">
                <i className="fa-solid fa-plus"></i> Create Group
              </button>
            </li>
            <li>
              <button className="btn btn-light my-2 w-100">
                xondamir's chat
              </button>
            </li>
            <li>
              <button className="btn btn-light my-2 w-100">n2</button>
            </li>
            <li>
              <button className="btn btn-light my-2 w-100">
                azizdjan_official
              </button>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Aside;
