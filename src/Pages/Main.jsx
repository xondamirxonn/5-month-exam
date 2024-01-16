import axios from "axios";
import Aside from "../Components/Aside";
import Header from "../Components/Header";
// import { Outlet, useNavigate } from "react-router-dom";
import ProfileUser from "./ProfileUser";
function Main() {
  return (
    <div>
      <Header />

      <div>
        <Aside />
      </div>
      <div className="d-grid justify-content-end">
        {/* <ProfileUser /> */}
      </div>
    </div>
  );
}

export default Main;
