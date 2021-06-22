import React from "react";
import { Form } from "react-bootstrap";

import "../styles.css";
import ExportButtonXLSX from "./ExportButton";
import encrypt from "../handleFile/encrypt";
import getFilePromise from "../promise/getFilePromise";

export default function HomeScreen() {
  const [resEncrypt, setResEncrypt] = React.useState("");

  const handleFile = async (event) => {
    setResEncrypt("");
    const file = event.target.files[0];
    if (file == null) return;

    const data = await getFilePromise(file);
    const encrypted = encrypt(data);
    console.log(encrypted);
    setResEncrypt(encrypted);
  };
  return (
    <section>
      <div className="bg-holder bg-main"></div>
      <div className="container d-flex align-items-center">
        <div className="col-md-7 col-lg-6 ">
          <h1 className="mb-5 heading-text">Mã hóa file excel</h1>
          <p className="mb-2 sub-text">Mời chọn file cần mã hóa</p>
          <Form.Control type="file" onChange={handleFile} className="mb-3" />
          {resEncrypt && (
            <>
              <ExportButtonXLSX
                csvData={resEncrypt.encrypted}
                fileName="FileMaHoa"
                title="Tải file mã hóa"
                className="mr-3"
              />
              <ExportButtonXLSX
                csvData={resEncrypt.cipher}
                fileName="FileGiaiMa"
                title="Tải file giải mã"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
