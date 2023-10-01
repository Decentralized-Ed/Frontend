import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      //   style={{
      //     width: "100px",
      //     height: "100px",
      //     margin: "auto",
      //     display: "block",
      //     color: "white",
      //   }}
      className="w-16 h-16 border-t-4 border-b-4 border-white mx-auto animate-spin rounded-full"
    ></Spinner>
  );
};

export default Loader;
