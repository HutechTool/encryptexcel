import React from "react";

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
      <div className="mb-4">
        <h1 className="mb-4 heading-text">Mã hóa file&nbsp;excel</h1>
        <p className="mb-1 sub-text text-left">Chọn file cần mã hóa</p>
        <input
          type="file"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={handleFile}
          className="mb-3 btn btn-success"
        />
      </div>
      {resEncrypt && (
        <>
          <button
            className="mr-3 btn btn-success"
            onClick={() => {
              exportToExcel(resEncrypt.encrypted, "FileDaMaHoa");
            }}
          >
            Tải file mã hóa
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              exportToExcel(resEncrypt.cipher, "FileGiaiMa");
            }}
          >
            Tải file giải hóa
          </button>
        </>
      )}
    </>
  );
}
