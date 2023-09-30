import React from "react";
import IDcard from "../components/IdCard/IDcard";
import DashBoardNavbar from "../components/DashboardNavbar/dashBoardNavbar";
import CertificatesHolder from "../components/CertificatesHolder/certificatesHolder";

const Dashboard = () => {
  return (
    <>
      <DashBoardNavbar />
      {/* <div className="w-[450px] h-[280px] mt-[100px] ml-[100px]">
        <IDcard />
        // use this for id-card width
      </div> */}
      <CertificatesHolder></CertificatesHolder>
    </>
  );
};

export default Dashboard;
