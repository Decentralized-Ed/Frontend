import { useSearchParams } from "react-router-dom";
import IDcard from "../components/IdCard/IDcard";
import Certificates from "../components/Certificates/certificate";
import FeeReciept from "../components/FeeReciept/feeReciept";
import Gradesheet from "../components/Gradesheet/Gradesheet";
import Transcript from "../components/transcript/transcript";

const Documents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const certificateType = searchParams.get("type");
  return (
    <>
      {certificateType === "IDcard" && <IDcard />}
      {certificateType === "Certificate" && <Certificates />}
      {certificateType === "feereciept" && <FeeReciept />}
      {certificateType === "gradesheet" && <Gradesheet />}
      {certificateType === "transcript" && <Transcript />}
      <button
        type="submit"
        className="w-1/3 ml-[33%] text-white bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Generate Document
      </button>
    </>
  );
};

export default Documents;
