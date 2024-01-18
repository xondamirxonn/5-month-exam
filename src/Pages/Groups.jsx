import React, { useState } from "react";
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../Hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";


function Groups() {
  const navigate = useNavigate();
  const { groupID } = useParams();
  const { groupId } = useParams();
  const [drop, setDrop] = useState(false);
  const [title, setTitle] = useState("");
  const [member, setMember] = useState(false);
  const groups = useSelector((store) => store.groups);
  const group = groups?.find((g) => g._id === groupID);
  const { data } = useFetch("/groups");
  console.log(data);
  console.log(group);

  const CreateItem = (e) => {
    e.preventDefault();

    let { data } = axios.post("/items", {
      title,
      groupId,
    });
    console.log(data);
  };

  // const AddMember = () => {};

  const GroupLeave = async () => {
    try {
      let { data } = await axios.post(`/groups/${group._id}/leave`);
      console.log(data);
      navigate("/main");
      toast(`You left the group ${group?.name}`, {
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

  const GroupDelete = async () => {
    try {
      if (confirm("Are you sure you want to delete the group?")) {
        let { data } = await axios.delete(`/groups/${group._id}`);
        navigate("/main");
        toast("Group deleted successfully", {
          type: "success",
          theme: "colored",
        });
      } else {
        toast("The deletion has been cancelled", {
          type: "success",
          theme: "colored",
        });
      }
    } catch (error) {
      if (error.response.status === 404 || 403 || 400) {
        console.log(error);
        toast(error.response.data.message, { type: "error", theme: "colored" });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="d-flex">
        <div className="w-25">
          <Aside />
        </div>
        <div className="w-75 my-5 mx-5 ">
          <div className="d-flex justify-content-between align-items-center ">
            <div>
              <h1>{group?.name}</h1>
            </div>
            <div className="d-flex gap-3">
              <div className="bg-light shadow-sm p-2 py-2  d-grid justify-content-start rounded-3 d-flex gap-2 align-items-center">
                <div className="">
                  <span>Owner:</span>
                </div>
                <div className="bg-primary text-white rounded-2 text-center px-2">
                  {group?.owner.name[0].charAt(0).toUpperCase() +
                    group?.owner.name[0].slice(1)}
                </div>
                <div>
                  {group?.owner.name.charAt(0).toUpperCase() +
                    group?.owner.name.slice(1)}
                  (
                  {group?.owner.username.charAt(0).toUpperCase() +
                    group?.owner.username.slice(1)}
                  )
                </div>
              </div>
              <button
                onClick={() => setDrop(!drop)}
                className="btn btn-light d-flex gap-2 align-items-center rounded-3 shadow-sm px-2"
              >
                <i className="fa-solid fa-ellipsis"></i>
                <i className="fa-solid fa-sort-down"></i>
              </button>
            </div>
          </div>
          {drop ? (
            <div
              className="bg-light p-2 d-grid rounded-2 px-5 position-absolute z-1 shadow"
              style={{ top: "10.5rem", right: "2.5rem" }}
            >
              <button className="btn " onClick={GroupDelete}>
                Delete Group
              </button>
              <button className="btn " onClick={GroupLeave}>
                Leave Group
              </button>
              <button className="btn" onClick={() => setMember(!member)  }>
                Add Member
              </button>
            </div>
          ) : (
          ""
          )}

          {member ? (
            <div className="border rounded-3 p-5 position-absolute w-50 h-50 z-3  bg-secondary">
              <i className="fa-solid fa-xmark fa-2xl position-absolute end-0 top-0 my-1 " style={{cursor: "pointer"}} onClick={() => setMember(false)}></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search user..."
              />
              <button className="btn btn-primary position-absolute bottom-0 end-0 m-3" onClick={() => setMember(false)}>Close</button>
            </div>
          ) : (
            ""
          )}
          <div className="d-flex justify-content-between gap-5 ">
            <div className="w-100 border rounded-3 p-3">
              <div className="d-flex justify-content-between align-items-center">
                <h2>
                  Items{" "}
                  <span className="bg-primary p-0 px-3 fs-4 rounded-2 text-white">
                    {group?.items.length}
                  </span>
                </h2>
                <div>
                  <form onSubmit={CreateItem} className="d-flex gap-2">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <button className="btn btn-primary">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div>
                {group?.items.map((item) => (
                  <div
                    key={item._id}
                    className="d-flex align-items-center gap-3 flex-fill"
                  >
                    <div className="my-4">
                      <span className="bg-primary px-3 text-white fw-bolder fs-4 py-2   rounded-3 ">
                        {item.title[0].toUpperCase()}
                      </span>
                    </div>
                    <div className="d-flex gap-1 align-items-baseline">
                      <span className="">
                        {" "}
                        {item.title.charAt(0).toUpperCase() +
                          item.title.slice(1)}
                      </span>
                      <div className="d-grid gap-2 mt-4">
                        <small className="bg-info text-white rounded-3 px-2 py-0">
                          Bought By {item.boughtBy?.name}{" "}
                          {new Date(item.boughtAt).toLocaleString()}
                        </small>

                        <small>
                          Created By {item.owner.name}{" "}
                          {new Date(item.createdAt).toLocaleString()}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="w-100 border rounded-3 p-3 overflow-y-auto "
              style={{ height: "75vh" }}
            >
              <div className="d-flex align-items-center gap-2">
                <h3>Members</h3>{" "}
                <span className="bg-primary p-0 px-3 fs-4 rounded-2 text-white">
                  {group?.members.length}
                </span>
              </div>
              {group?.members.map((member) => (
                <ul key={member._id} className="list-unstyled  my-2">
                  <li className="border p-3 rounded-3 ">{member?.name}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
