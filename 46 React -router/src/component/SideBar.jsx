import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  const location = useLocation();

  const handleOnClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "180px" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </Link>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link ${
              location.pathname === "/" ? "active" : "text-white"
            }`}
            onClick={() => handleOnClick("home")}
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/create-post"
            className={`nav-link ${
              location.pathname === "/create-post" ? "active" : "text-white"
            }`}
            onClick={() => handleOnClick("create-post")}
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>

      <hr />
    </div>
  );
};

export default SideBar;
