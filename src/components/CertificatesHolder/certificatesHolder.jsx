import React from "react";
import jsPDF from "jspdf";
import { useNavigate } from "react-router";
import document from "../../../src/document.jpg";
import degreeCertificate from "../../../src/degreeeCertificate.jpeg";
import idCard from "../../../src/idCard.jpeg";
import feereciept from "../../../src/feereciept.png";
import Gradesheet from "../../../src/Gradesheet.png";
import Transcript from "../../../src/Transcript.png";
import TC from "../../../src/TC.png";

const CertificatesHolder = () => {
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

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="mt-20 mb-4 text-pink-500 text-center capitalize text-3xl font-bold">
        Our Documents
      </h1>
      <hr className="w-1/5 mx-auto bg-pink-500 h-1"></hr>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-4 md:mx-12 lg:mx-20">
        {/** Document Cards */}
        {documentData.map((documentItem, index) => (
          <div
            className="py-8 px-4 border rounded-lg shadow-lg border-pink-500 bg-black text-white"
            key={index}
          >
            <h1 className="text-2xl text-pink-500 font-bold text-center mb-4">
              {documentItem.title}
            </h1>
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-auto h-60 object-cover mb-4"
                src={documentItem.image}
                alt={documentItem.title}
              />
              <button
                className="text-white font-semibold py-2 px-4 rounded-full bg-pink-500 hover:bg-pink-600 focus:outline-none"
                onClick={() => {
                  navigate(`/document?type=${documentItem.type}`);
                }}
              >
                Give Document
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesHolder;

const documentData = [
  {
    title: "ID Card",
    image: idCard,
    type: "IDcard",
  },
  {
    title: "Degree Certificate",
    image: degreeCertificate,
    type: "Certificate",
  },
  {
    title: "Fee Receipt",
    image: feereciept,
    type: "feereciept",
  },
  {
    title: "Grade Sheet",
    image: Gradesheet,
    type: "gradesheet",
  },
  {
    title: "Transcript",
    image: Transcript,
    type: "transcript",
  },
  {
    title: "Transfer Certificate",
    image: TC,
    type: "transfercertificate",
  },
];
