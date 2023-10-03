import React from "react";
import jsPDF from "jspdf";
import { useNavigate } from "react-router";
import document from "../../../src/document.jpg"; // Placeholder image, replace with actual images
import degreeCertificate from "../../../src/degreeeCertificate.jpeg"; // Placeholder image, replace with actual images

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
    <div className="mt-20">
      <h1 className="mt-20 mb-2 text-center capitalize text-2xl">
        Our Documents
      </h1>
      <hr className="w-1/5 mx-auto"></hr>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 mx-4 md:mx-20 lg:mx-20 gap-4 md:gap-8 justify-items-center">
        {/* First Document */}
        <div className="py-10" id="Certificate">
          <div className="rounded overflow-hidden shadow-lg border border-white justify-items-center">
            <h1 className="w-full text-center mt-4 mb-1 text-2xl text-white">
              ID Card
            </h1>
            <hr className="w-1/3 mx-auto"></hr>
            <img className="p-4 w-60 h-60" src={document} alt="ID Card"></img>
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
            <img
              className="p-4 w-60 h-60"
              src={degreeCertificate}
              alt="Degree Certificate"
            ></img>
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
              Fee Receipt
            </h1>
            <hr className="w-1/3 mx-auto"></hr>
            <img
              className="p-4 w-60 h-60"
              src={document}
              alt="Fee Receipt"
            ></img>
            <div className="flex items-center justify-center">
              <button
                className="text-white mb-4 font-semibold py-2 px-4 rounded border border-white"
                onClick={() => {
                  navigate("/document?type=feereceipt");
                }}
              >
                Give Document
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Document */}
        <div className="py-10 ">
          <div className="rounded overflow-hidden shadow-lg border border-white justify-items-center">
            <h1 className="w-full text-center mt-4 mb-1 text-2xl">
              Grade Sheet
            </h1>
            <hr className="w-1/3 mx-auto"></hr>
            <img
              className="p-4 w-60 h-60"
              src={document}
              alt="Grade Sheet"
            ></img>
            <div className="flex items-center justify-center">
              <button
                className="text-white mb-4 font-semibold py-2 px-4 rounded border border-white"
                onClick={() => {
                  navigate("/document?type=gradesheet");
                }}
              >
                Give Document
              </button>
            </div>
          </div>
        </div>

        {/* Fifth Document */}
        <div className="py-10 ">
          <div className="rounded overflow-hidden shadow-lg border border-white justify-items-center">
            <h1 className="w-full text-center mt-4 mb-1 text-2xl">
              Transcript
            </h1>
            <hr className="w-1/3 mx-auto"></hr>
            <img
              className="p-4 w-60 h-60"
              src={document}
              alt="Transcript"
            ></img>
            <div className="flex items-center justify-center">
              <button
                className="text-white mb-4 font-semibold py-2 px-4 rounded border border-white"
                onClick={() => {
                  navigate("/document?type=transcript");
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
