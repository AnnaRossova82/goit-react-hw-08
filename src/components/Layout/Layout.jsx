import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <hr />
      <Outlet />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;

