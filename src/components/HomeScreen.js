import React from "react";

import "../styles.css";
import Encode from "./Encode";
import Decrypt from "./Decrypt";

import excelLogo from "../assets/icon.png";

export default function HomeScreen() {
  const [status, setStatus] = React.useState("encode");

  const handleClick = (newstatus) => {
    setStatus(newstatus);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        id="mainNav"
      >
        <div className="container px-5">
          <h1>Mã hóa Excel</h1>
          <div>
            <button
              className="btn btn-light btn-lg mr-2 text-nowrap"
              onClick={() => handleClick("encode")}
            >
              Mã hóa
            </button>
            <button
              className="btn btn-light btn-lg text-nowrap"
              onClick={() => handleClick("decrypt")}
            >
              Giải mã
            </button>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                {status === "encode" ? <Encode /> : <Decrypt />}
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img src={excelLogo} alt="excel" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
