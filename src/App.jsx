import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./Pages/Main";
import Groups from "./Pages/Groups";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGroups } from "./Store/Slices/groups";
import axios from "axios";
import { localTokenKey } from "./contstans";
import NotFound from "./Pages/NotFound";


function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem(localTokenKey);
  useEffect(() => {
    (async function () {
      if (token) {
        const { data: Mygroups } = await axios.get("/groups");
        dispatch(setGroups(Mygroups));
      }
    })();
  }, [navigate, token, dispatch]);

  
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/main/groups/:groupID" element={<Groups />} />
        </Route>
        <Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;