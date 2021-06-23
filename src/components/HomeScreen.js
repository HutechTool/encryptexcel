import React from "react";

import "../styles.css";
import Encode from "./Encode";
import Decrypt from "./Decrypt";

export default function HomeScreen() {
  const [status, setStatus] = React.useState("encode");

  const togleStatus = () => {
    setStatus(status === "encode" ? "decrypt" : "encode");
  };

  return (
    <section>
      <div className="bg-holder bg-main"></div>
      <div className="container d-flex align-items-center full mt-5">
        <div className="col-md-7 col-lg-6 full mt-3">
          {status === "encode" ? (
            <div className="row">
              <p className="mb-2 decrypt" onClick={togleStatus}>
                Giải mã
              </p>
              <Encode />
            </div>
          ) : (
            <div className="row">
              <p className="mb-2 encode" onClick={togleStatus}>
                Mã hóa
              </p>
              <Decrypt />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
