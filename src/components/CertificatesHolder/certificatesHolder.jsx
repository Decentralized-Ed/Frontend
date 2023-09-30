import DegreeCertificate from "../Certificates/degreeCertificate";
import jsPDF from "jspdf";
import mergeImages from "merge-images";
import { useEffect } from "react";
import imge1 from "../../../src/img2.png";
import imge2 from "../../../src/img1.png";
const CertificatesHolder = () => {
  //creating the pdf of the certificate using the html element.

  useEffect(() => {
    const element = document.querySelector("#img1");
    mergeImages([imge2, imge1]).then((b64) => (element.src = b64));
    // element.src = imge2;
    console.log(element);
  }, []);

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
      <img id="img1" src="" alt="Null Image"></img>
      <h1 className="mt-20 mb-2 text-center capitalize text-2xl">
        Our Documents
      </h1>
      <hr className="w-1/5 mx-auto"></hr>

      <div className="grid grid-cols-3 mt-20 mx-20 lg:gap-24 md:gap-5 justify-items-center">
        {/* First Document */}
        <div className="py-10" id="Certificate">
          <div className="rounded overflow-hidden shadow-lg border border-white justify-items-center">
            <h1 className="w-full text-center mt-4 mb-1 text-2xl text-blue-600">
              This is Document1
            </h1>
            <hr className="w-1/3 mx-auto"></hr>
            <img
              className=" p-4"
              src="https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg"
            ></img>
            <div className="flex items-center justify-center">
              <button
                className="text-white mb-4 font-semibold py-2 px-4 rounded border border-white"
                onClick={createPdf}
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
              This is Document1
            </h1>
            <hr className="w-1/3 mx-auto"></hr>
            <img
              className=" p-4"
              src="https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg"
            ></img>
            <div className="flex items-center justify-center">
              <button className="text-white mb-4 font-semibold py-2 px-4 rounded border border-white">
                Give Document
              </button>
            </div>
          </div>
        </div>

        {/* Third Document */}
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg border border-white justify-items-center">
            <h1 className="w-full text-center mt-4 mb-1 text-2xl">
              This is Document1
            </h1>
            <hr className="w-1/3 mx-auto"></hr>
            <img
              className=" p-4"
              src="https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg"
            ></img>
            <div className="flex items-center justify-center">
              <button className="text-white mb-4 font-semibold py-2 px-4 rounded border border-white">
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
