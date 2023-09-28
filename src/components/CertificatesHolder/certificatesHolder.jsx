import DegreeCertificate from "../Certificates/degreeCertificate";

const CertificatesHolder = () => {
  return (
    <div className="mt-20">
      <h1 className="mt-20 mb-2 text-center capitalize text-2xl">
        Our Documents
      </h1>
      <hr className="w-1/5 mx-auto"></hr>
      <div className="grid grid-cols-3 mt-20 mx-20 lg:gap-24 md:gap-5 justify-items-center">
        {/* First Document */}
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
