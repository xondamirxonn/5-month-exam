import React, { useState } from "react";
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../Hooks/useFetch";
import axios from "axios";

function Groups() {
  // const [currents, setCurrent] = useState([])
  const { groupId } = useParams();

  const groups = useSelector((store) => store.groups)
  const group = groups?.find((g) => g._id === groupId)
const {data} = useFetch("/groups")
console.log(data);
  console.log(groupId);
 
    return (
      <div>
      <Header />
      <div>
        <div className="w-25">
          <Aside />
        </div>
        <div>
{group?.map((gr) => {
    if (group._id === groupId) {
      {console.log(group.name)}
      return (
        <h1>{gr.name}</h1>
      )
    }
}) }  
      
        </div>
      </div>
    </div>
  );
}

export default Groups;
