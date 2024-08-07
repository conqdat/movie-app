import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Rootlayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Rootlayout;
