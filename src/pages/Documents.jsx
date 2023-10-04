import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import IDcard from "../components/IdCard/IDcard";
import { useSearchParams } from "react-router-dom";
import FeeReciept from "../components/FeeReciept/feeReciept";
import Certificates from "../components/Certificates/certificate";
import { useUpLoadPdfMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import Gradesheet from "../components/Gradesheet/Gradesheet";
import Transcript from "../components/transcript/transcript";
import DashBoardNavbar from "../components/DashboardNavbar/dashBoardNavbar";

const Documents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const certificateType = searchParams.get("type");
  const [upLoadPdf, { isLoading }] = useUpLoadPdfMutation();

  const createPdf = async () => {
    // const doc = new jsPDF({
    //   format: "a4",
    //   unit: "px",
    // });
    const element = document.getElementById(certificateType);
    html2canvas(element).then(async (canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.setFont("Inter-Regular", "normal");
      pdf.addImage(imgData, "PNG", 0, 0, 200, 200);
      const pdfBlob = pdf.output("blob");
      // pdf.save("document.pdf");

      const formData = new FormData();
      formData.append("document", pdfBlob, "document.pdf");

      // fetch("http://localhost:5000/api/verridoc/upload-doc", {
      //   method: "POST",
      //   body: formData,
      //   // headers: {
      //   //   "Content-Type": "application/json; charset=utf-8",
      //   //   "Access-Control-Allow-Origin": "*",
      //   // },
      // })
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return response.json(); // If the backend sends a JSON response
      //   })
      //   .then((data) => {
      //     console.log("PDF uploaded successfully:", data);
      //   })
      //   .catch((error) => {
      //     console.error("Error uploading PDF:", error);
      //   });

      try {
        const response = await upLoadPdf(formData);
        console.log(response);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    });
  };

  return (
    <div id="container">
      <DashBoardNavbar />
      <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div>
          {certificateType === "IDcard" && <IDcard />}
          {certificateType === "Certificate" && <Certificates />}
          {certificateType === "feereciept" && <FeeReciept />}
          {certificateType === "gradesheet" && <Gradesheet />}
          {certificateType === "transcript" && <Transcript />}
        </div>
        <button
          type="submit"
          onClick={createPdf}
          className="mt-4 text-white bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Generate Document
        </button>
      </div>
    </div>
  );
};

export default Documents;
