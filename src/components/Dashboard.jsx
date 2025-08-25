import React, { useContext } from "react";
import NavBar from "./NavBar";
import { AppContext } from "../context/AppContext";
import SideBar from "./SideBar";

const Dashboard = () => {
  const { user } = useContext(AppContext);
  return (
    <div>
      <NavBar />

      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            {/* Left side bar */}
            <SideBar />
          </div>

          {/* right side where content will be shown */}
          <div className="grow mx-5"></div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
