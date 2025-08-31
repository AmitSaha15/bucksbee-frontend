import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Dashboard = ({ children, activeMenu }) => {
  return (
    <div>
      <NavBar activeMenu={activeMenu} />

      <div className="flex">
        <div className="max-[1080px]:hidden">
          {/* Left side bar */}
          <SideBar activeMenu={activeMenu} />
        </div>

        {/* right side where content will be shown */}
        <div className="grow mx-5">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
