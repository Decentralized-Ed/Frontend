import "./certificate.css";

const Certificates = () => {
  return (
    <>
      <div className="container pm-certificate-container sm:w-[100%]">
        <div className="outer-border"></div>
        <div className="inner-border"></div>

        <div className="pm-certificate-border col-xs-12">
          <div className="row pm-certificate-header">
            <div className="pm-certificate-title col-xs-12 text-center">
              {/* <h2>Buffalo Public Schools Certificate of Completion</h2> */}
              <input
                type="text"
                className="certiName"
                placeholder="Institute Name"
                value="IIITM Gwalior"
              />
            </div>
          </div>

          <div className="row pm-certificate-body">
            <div className="pm-certificate-block">
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                    <span className="pm-name-text bold">
                      <input
                        type="text"
                        placeholder="Student Name"
                        className="text-center"
                      />
                    </span>
                  </div>
                  <div className="col-xs-2"></div>
                </div>
              </div>

              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-earned col-xs-8 text-center">
                    <span className="pm-earned-text padding-0 block cursive">
                      has earned
                    </span>
                    <span className="pm-credits-text block bold sans">
                      {/* PD175: 1.0 Credit Hours */}
                      <input
                        type="text"
                        className="CGpoints bold sans"
                        placeholder="Grade Points"
                      />
                    </span>
                  </div>
                  <div className="col-xs-2"></div>
                  <div className="col-xs-12"></div>
                </div>
              </div>

              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-course-title col-xs-8 text-center">
                    <span className="pm-earned-text block cursive">
                      while completing the training course entitled
                    </span>
                  </div>
                  <div className="col-xs-2"></div>
                </div>
              </div>

              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="pm-course-title underline col-xs-8 text-center">
                    <span className="pm-credits-text block bold sans">
                      {/* BPS PGS Initial PLO for Principals at Cluster Meetings */}
                      <input
                        type="text"
                        className="CGpoints CourseName bold sans"
                        placeholder="Course Name"
                      />
                    </span>
                  </div>
                  <div className="col-xs-2"></div>
                </div>
              </div>
            </div>

            <div className="col-xs-12">
              <div className="row">
                <div className="pm-certificate-footer">
                  <div className="col-xs-4 pm-certified col-xs-4 text-center">
                    <span className="pm-credits-text block sans">
                      ABV-IIITM
                    </span>
                    <span className="pm-empty-space block underline"></span>
                    <span className="bold block">Director of IIITM</span>
                  </div>
                  <div className="col-xs-4"></div>
                  <div className="col-xs-4 pm-certified col-xs-4 text-center">
                    <span className="pm-credits-text block sans">QR Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
