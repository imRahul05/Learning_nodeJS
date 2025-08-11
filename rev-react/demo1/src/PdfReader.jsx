import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Tell PDF.js where the worker is
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const PdfTextReader = () => {
  const [pdfText, setPdfText] = useState("");

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function () {
      try {
        const typedArray = new Uint8Array(this.result);

        const pdf = await pdfjsLib.getDocument(typedArray).promise;
         console.log(pdf)
        let textContent = "";

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const text = await page.getTextContent();
          const pageText = text.items.map((item) => item.str).join(" ");
          textContent += `Page ${i}:\n${pageText}\n\n`;
        }
        
        setPdfText(textContent);
       
      } catch (error) {
        console.error("Error reading PDF:", error);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>PDF Text Reader (Vite + React)</h1>
      <input type="file" accept="application/pdf" onChange={handleUpload} />
      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "#f4f4f4",
          padding: "10px",
          marginTop: "20px",
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        {pdfText || "No PDF loaded"}
      </pre>
    </div>
  );
};

export default PdfTextReader;
