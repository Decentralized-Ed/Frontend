import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Home;
