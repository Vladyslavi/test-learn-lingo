import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";



const Home = lazy(() => import("../pages/Home"));
const Favorite = lazy(() => import("../pages/Favorite"));
const Teachers = lazy(() => import("../pages/Teachers"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>


    </>
  );
};
