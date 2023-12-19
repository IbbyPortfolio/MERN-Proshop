import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        widows: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Loader;
