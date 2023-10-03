import DegreeCertificate from "../Certificates/degreeCertificate";
import jsPDF from "jspdf";
import mergeImages from "merge-images";
import { useEffect } from "react";
import idCard from "../../../src/idCard.jpeg";
import feereciept from "../../feereciept.png";
import degreeCertificate from "../../../src/degreeeCertificate.jpeg";
import { useNavigate } from "react-router";
const CertificatesHolder = () => {
  const navigate = useNavigate();

  const createPdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });
    const certificate = document.getElementById("Certificate");
    doc.setFont("Inter-Regular", "normal");
    doc.html(certificate, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  return (
    <div className="mt-20">
      <h1 className="mt-20 mb-2 text-center capitalize text-2xl">
        Our Documents
      </h1>
      <hr className="w-1/5 mx-auto"></hr>

      <div className="grid grid-cols-3 mt-20 mx-20 lg:gap-24 md:gap-5 justify-items-center">
        {/* First Document */}
        <div className="py-10" id="Certificate">
          <div className="rounded overflow-hidden shadow-lg border border-white justify-items-center">
            <h1 className="w-full text-center mt-4 mb-1 text-2xl text-white">
              ID Card
            </h1>
            <hr className="w-1/3 mx-auto"></hr>
            <img className=" p-4" src={idCard}></img>
            <div className="flex items-center justify-center">
              <button
                className="text-white mb-4 font-semibold py-2 px-4 rounded border border-white"
                onClick={() => {
                  navigate("/document?type=IDcard");
                }}
              >
                Give Document
              </button>
            </div>
          </div>
        </div>

        {/* Second Document */}
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg border border-white justify-items-center">
            <h1 className="w-full text-center mt-4 mb-1 text-2xl">
              Degree Certificate
            </h1>
            <hr className="w-1/2 mx-auto"></hr>
            <img className=" p-4" src={degreeCertificate}></img>
            <div className="flex items-center justify-center">
              <button
                className="text-white mb-4 font-semibold py-2 px-4 rounded border border-white"
                onClick={() => {
                  navigate("/document?type=Certificate");
                }}
              >
                Give Document
              </button>
            </div>
          </div>
        </div>

        {/* Third Document */}
        <div className="py-10 ">
          <div className="rounded overflow-hidden shadow-lg border border-white justify-items-center">
            <h1 className="w-full text-center mt-4 mb-1 text-2xl">
              Fee Reciept
            </h1>
            <hr className="w-1/3 mx-auto"></hr>
            <img className=" p-4" src={feereciept}></img>
            <div className="flex items-center justify-center">
              <button
                className="text-white mb-4 font-semibold py-2 px-4 rounded border border-white"
                onClick={() => {
                  navigate("/document?type=feereciept");
                }}
              >
                Give Document
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesHolder;
