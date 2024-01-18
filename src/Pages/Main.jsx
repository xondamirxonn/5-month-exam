import axios from "axios";
import Aside from "../Components/Aside";
import Header from "../Components/Header";
import "../Styles/Main.css"
import ProfileUser from "./ProfileUser";
import { localTokenKey } from "../contstans";


function Main() {

  const token = localStorage.getItem(localTokenKey)
  if(!token) {
    window.location.replace("/login")
  }

  return (
    <div className="">
      <Header />

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
