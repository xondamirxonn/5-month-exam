import { Container } from "react-bootstrap";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
// import Group from "./Pages/Groups";
import Groups from "./Pages/Groups";
// let { groupId } = useParams();

// console.log(groupId);

function App() {
  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/main/groups/:groupId" element={<Groups />} />
      </Routes>
    </>
  );
}

export default App;
