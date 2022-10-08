import React from "react";
import { Link } from "react-router-dom";
import Icon from "awesome-react-icons";

const Sidebar = ({ active }) => {
  return (
    <div
      className="sidebar"
      style={{ backgroundColor: "#FDF5E6", height: "100vh" }}
    >
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "150px",
            width: "150px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="user" style={{ height: "100px", width: "100px" }} />
        </div>
      </div>
      <div style={navItemStyle}>
        <Link to="/">Front Page</Link>
      </div>
      <div style={navItemStyle} className={active === "shapes" ? "active" : ""}>
        <Link to="/admin">Shapes</Link>
      </div>
      <div style={navItemStyle}>
        <Link to="#">Residents</Link>
      </div>
      <div style={navItemStyle}>
        <Link to="#">Forum</Link>
      </div>
      <div style={navItemStyle}>
        <Link to="#">Events</Link>
      </div>
      <div style={navItemStyle}>
        <Link to="#">Comments</Link>
      </div>
      <div style={navItemStyle}>
        <Link to="#">Pages</Link>
      </div>
      <div style={navItemStyle}>
        <Link to="#">Projects</Link>
      </div>
    </div>
  );
};

export default Sidebar;

const navItemStyle = {
  height: "50px",
  textAlign: "center",
  lineHeight: "50px",
};
