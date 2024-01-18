import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useFetch from "../Hooks/useFetch";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

function Aside() {
  const [groups, setGroups] = useState(false);
  const [create, setCreate] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const CreateGroupSubmit = async (e) => {
    
  
    e.preventDefault();
   try {
     let { data } = await axios.post("/groups", {
       name,
       password,
     });

     console.log(data);
     setTimeout(() => {
       window.location.reload();
     }, 1_000);

     toast("group created successfully", {
       type: "success",
       theme: "colored",
     });
   } catch (error) {
     if (error.response.status === 404 || 403 || 400) {
       console.log(error);
       toast(error.response.data.message, {
         type: "error",
         theme: "colored",
       });
     }
   }
 
  };

  let {data} = useFetch("/groups")

  console.log(data);

  return (
    <div className="bg-light z-n1  shadow-lg w-100">
      <div className=" mx-3 py-4 " style={{ height: "90vh" }}>
        <button className="btn btn-light w-100 p-3">
          <Link className="text-decoration-none text-black p-5" to="/main">
            <i className="fa-solid fa-user" style={{ color: "#2753a0" }}></i>{" "}
            Profile
          </Link>
        </button>
        <button
          className="btn btn-light w-100 p-3"
          onClick={() => setGroups(!groups)}
        >
          <i className="fa-regular fa-comments"></i> Groups
        </button>
        {groups ? (
          <ul  className="list-unstyled">
            <li className="">
              <button
                className="btn btn-light w-100"
                onClick={() => setCreate(!create)}
              >
                <i className="fa-solid fa-plus"></i> Create Group
              </button>
            </li>

            {data.map((group) => (
              <li className="my-3 " >
                <Button as={Link} to={`/main/groups/${group._id}`} className="btn btn-light mx-1 w-100 " >{group?.name}</Button>
              </li>
            ))}
            
        
          </ul>
        ) : (
          ""
        )}

        {create ? (
          <div
            className="bg-light shadow p-2 w-100 z-3  start-100 position-relative rounded-4"
            style={{ marginTop: "-15rem" }}
          >
            <span className="d-flex align-items-center justify-content-between mx-1 ">
              Group name and password{" "}
              <i
                onClick={() => setCreate(false)}
                className="fa-solid fa-xmark"
                style={{ cursor: "pointer" }}
              ></i>
            </span>
            <form className="my-3" onSubmit={CreateGroupSubmit}>
              <input
                className="form-control"
                type="text"
                placeholder="Group Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="form-control my-2"
                type="password"
                placeholder="Group password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="d-flex justify-content-between gap-2">
                <button className="btn btn-primary w-50">Create</button>
                <button
                  onClick={() => setCreate(false)}
                  className="btn btn-outline-primary w-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Aside;
