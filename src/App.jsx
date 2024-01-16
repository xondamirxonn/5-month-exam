import { Container } from "react-bootstrap";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  return (
    <>
    {/* <Login /> */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        {/* <Route  path="main/group" /> */}
      </Routes>
    </>
  );
}

export default App;
