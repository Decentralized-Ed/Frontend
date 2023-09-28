import React from "react";
import NavBar from "../components/Navbar/Navbar";
import DashBoardNavbar from "../components/DashboardNavbar/dashBoardNavbar";
import CertificatesHolder from "../components/CertificatesHolder/certificatesHolder";

const Dashboard = () => {
  return (
    <>
      <DashBoardNavbar />
      <CertificatesHolder></CertificatesHolder>
    </>
  );
};

export default Dashboard;
