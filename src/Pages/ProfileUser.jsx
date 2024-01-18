import axios from "axios";
import React from "react";
import useFetch from "../Hooks/useFetch";
import { toast } from "react-toastify";

function ProfileUser() {
  let { data } = useFetch("/auth");
  console.log(data);
  const DeleteUser = () => {
    if (confirm("Rostan ham accountni o'chirmoqchimisiz")) {
      axios.delete("/users");
      toast("Account deleted", {type: "success" , theme: "colored"});
      setTimeout(() => {
        window.location.reload();
      }, 3_000);
    } else {
      console.log("Bekor qilindi");
      toast("Account deletion cancelled", {type: "success", theme: "colored"});
    }
  };

  const Deleted = data?.status === "deleted" ;
  return (
    <div className="w-100 ">
      <div className="border bg-light rounded-4 mx-5 p-4 d-flex align-items-start justify-content-between">
        <div>
          <h1 className="">Your Profile</h1>

          <div className="d-flex flex-fill gap-5 align-items-center">
            <h1
              className="rounded-circle align-items-center text-center  d-grid text-white display-2"
              style={{
                backgroundColor: "brown",
                height: "100px",
                width: "100px",
                fontSize: "4rem",
              }}
            >
              {data?.name[0].toUpperCase()}
            </h1>
            <div>
              <div className="d-flex gap-3 align-items-center">
                <h2>
                  {data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}
                </h2>
                <span
                  className={`rounded-3 py-1 px-3 text-white  ${
                    Deleted ? "bg-danger" : "bg-success"
                  }`}
                >
                  {data?.status.charAt(0).toUpperCase() + data?.status.slice(1)}
                </span>
              </div>
              <small>{data?.username}</small>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-primary">
            <i className="fa-solid fa-copy"></i> Copy Username
          </button>
          <button className="btn btn-danger" onClick={DeleteUser}>
            <i className="fa-solid fa-trash"></i> Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
