import { Route, Routes } from "react-router";
import Login from "../registers/Login";
import Register from "../registers/Register";
import MainLayout from "../../MainLayout";
import HomePage from "../home/HomePage";
export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
