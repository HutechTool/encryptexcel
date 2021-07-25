import React from "react";

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
    exportToExcel(decrypted, "FileDaGiaiMa");
  };
  return (
    <>
      <div className="row mb-3">
        <h1 className="mb-4 heading-text">Giải mã file&nbsp;excel</h1>
        <div className="mb-3">
          <p className="mb-1 sub-text text-left">Chọn file cần giải mã</p>
          <input
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={handleCrypted}
            className="btn btn btn-success"
          />
        </div>
        <div className="">
          <p className="mb-1 sub-text text-left">Chọn file giải mã</p>
          <input
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={handleCypher}
            className="btn btn-success"
          />
        </div>
      </div>
      {fileCrypted && fileCypher && (
        <button className="btn btn-success" onClick={handleClick}>
          Tải file được giải mã
        </button>
      )}
    </>
  );
}
