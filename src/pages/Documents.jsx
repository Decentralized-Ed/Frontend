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
        <button
          type="submit"
          className="mt-4 text-white bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Generate Document
        </button>
      </div>
    </>
  );
};

export default Documents;
