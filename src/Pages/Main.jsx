import axios from "axios";
import Aside from "../Components/Aside";
import Header from "../Components/Header";
import bg_img from "../assets/main-bg-img.webp"
// import { Outlet, useNavigate } from "react-router-dom";
import ProfileUser from "./ProfileUser";
function Main() {

  return (
    <div>
      <Header />

      <div className="d-flex">
        <div className="w-25">
          <Aside />
        </div>
        <div className="w-75 my-5">
          <ProfileUser />
        </div>
      </div>
    </div>
  );
}

export default Main;
