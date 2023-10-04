import { useSearchParams } from "react-router-dom";
import IDcard from "../components/IdCard/IDcard";
import Certificates from "../components/Certificates/certificate";
import FeeReciept from "../components/FeeReciept/feeReciept";
import Gradesheet from "../components/Gradesheet/Gradesheet";
import Transcript from "../components/transcript/transcript";
import DashBoardNavbar from "../components/DashboardNavbar/dashBoardNavbar";
import TransferCertificate from "../components/TransferCretificate/TC";

const Documents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const certificateType = searchParams.get("type");

  return (
    <>
      <DashBoardNavbar />
      <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div>
          {certificateType === "IDcard" && <IDcard />}
          {certificateType === "Certificate" && <Certificates />}
          {certificateType === "feereciept" && <FeeReciept />}
          {certificateType === "gradesheet" && <Gradesheet />}
          {certificateType === "transcript" && <Transcript />}
          {certificateType === "transfercertificate" && <TransferCertificate />}
        </div>
      </div>
    </>
  );
};

export default Documents;
