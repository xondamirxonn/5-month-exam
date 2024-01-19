import axios from "axios";
import Aside from "../Components/Aside";
import Header from "../Components/Header";
import "../Styles/Main.css"
import ProfileUser from "./ProfileUser";
import { localTokenKey } from "../contstans";
import useFetch from "../Hooks/useFetch";


function Main() {

  const token = localStorage.getItem(localTokenKey)
  if(!token) {
    window.location.replace("/login")
  }

  let { data } = useFetch("/auth");

  



  return (
    <div className="">
      <Header />

      <div className="d-grid justify-content-end ">
        <div
          class="alert alert-warning alert-dismissible fade show  text-center"
          role="alert"
        >
          {" "}
          Hurmatli{" "}
          <strong>
            {data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}{" "}
          </strong>{" "}
          Bizning sayt test rejimida ishlamoqda
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div className="d-flex">
        <div className="w-25">
          <Aside />
        </div>
        <div className="w-75 my-2 cont z-2">
          <div className="my-5">
            <ProfileUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
