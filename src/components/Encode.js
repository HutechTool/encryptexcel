import React from "react";
import { Form, Button } from "react-bootstrap";

import encrypt from "../handleFile/encrypt";
import getFilePromise from "../promise/getFilePromise";
import exportToExcel from "../handleFile/exportFile";

export default function Encode() {
  const [resEncrypt, setResEncrypt] = React.useState("");
  const handleFile = async (event) => {
    setResEncrypt("");
    const file = event.target.files[0];
    if (file == null) return;

    const data = await getFilePromise(file);
    const encrypted = encrypt(data);
    setResEncrypt(encrypted);
  };
  return (
    <>
      <h1 className="mb-4 heading-text">Mã hóa file&nbsp;excel</h1>
      <p className="mb-1 sub-text">Chọn file cần mã hóa</p>
      <Form.Control
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={handleFile}
        className="mb-5 btn btn-light"
      />
      {resEncrypt && (
        <>
          <Button
            className="mr-3"
            variant="success"
            onClick={() => {
              exportToExcel(resEncrypt.encrypted, "FileDaMaHoa");
            }}
          >
            Tải file mã hóa
          </Button>
          <Button
            variant="success"
            onClick={() => {
              exportToExcel(resEncrypt.cipher, "FileGiaiMa");
            }}
          >
            Tải file giải hóa
          </Button>
        </>
      )}
    </>
  );
}
