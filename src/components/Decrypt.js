import React from "react";
import { Form, Button } from "react-bootstrap";

import decrypt from "../handleFile/decrypt";
import exportToExcel from "../handleFile/exportFile";
import getFilePromise from "../promise/getFilePromise";

export default function Decrypt() {
  const [fileCrypted, setFileCrypted] = React.useState(null);
  const [fileCypher, setFileCypher] = React.useState(null);

  const handleCrypted = async (event) => {
    setFileCrypted(null);
    const file = event.target.files[0];
    if (file == null) return;
    const data = await getFilePromise(file);
    setFileCrypted(data);
  };
  const handleCypher = async (event) => {
    setFileCypher(null);
    const file = event.target.files[0];
    if (file == null) return;
    const data = await getFilePromise(file);
    setFileCypher(data);
  };

  const handleClick = () => {
    if (fileCrypted == null || fileCypher == null) {
      return alert("Vui lòng chọn cả 2 file!");
    }
    const decrypted = decrypt(fileCrypted, fileCypher);
    // if (decrypted == null) {
    //   return alert("Không mã hóa được file");
    // }
    exportToExcel(decrypted, "FileDaGiaiMa");
  };
  return (
    <>
      <h1 className="mb-4 heading-text">Giải mã file&nbsp;excel</h1>
      <p className="mb-1 sub-text">Mời chọn file cần giải mã</p>
      <Form.Control
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={handleCrypted}
        className="mb-5 btn btn btn-light"
      />
      <p className="mb-1 sub-text">Mời chọn file giải mã</p>
      <Form.Control
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={handleCypher}
        className="mb-5 btn btn-light"
      />
      {fileCrypted && fileCypher && (
        <Button variant="success" onClick={handleClick}>
          Tải file được giải mã
        </Button>
      )}
    </>
  );
}
