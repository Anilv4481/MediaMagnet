import { Route, Routes } from "react-router";
import Login from "../registers/Login";
import Register from "../registers/Register";
export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
