import React, { useEffect, useState } from "react";
import File1 from "../text/hodge.txt";
import File2 from "../text/lara.txt";
import File3 from "../text/richards.txt";
import File4 from "../text/sreeshanth.txt";
import File5 from "../text/Cupra.txt";
import File6 from "../text/DS.txt";
import File7 from "../text/Ferrari.txt";
import File8 from "../text/rollsroyce.txt";
import File9 from "../text/beacons.txt";
import File10 from "../text/blackbox.txt";
import File11 from "../text/hugging_chat.txt";
import File12 from "../text/perplexity.txt";
import File13 from "../text/Burger.txt";
import File14 from "../text/Dosa.txt";
import File15 from "../text/Pizza.txt";
import File16 from "../text/poori.txt";
import File17 from "../text/maldini.txt";
import File18 from "../text/muller.txt";
import File19 from "../text/pele.txt";
import File20 from "../text/puskas.txt";

const sheetURL = "https://docs.google.com/spreadsheets/d/1Hs81MpD5skff2KJccLVs4EQaXhql4SvX-wM7DmL0X24";

const StoringText = () => {
  const textFiles = {
    "Problem 1 (Medium)": [
      { name: "Hodge", path: File1 },
      { name: "Lara", path: File2 },
      { name: "Richards", path: File3 },
      { name: "Sreeshanth", path: File4 },
    ],
    "Problem 2 (Hard)": [
      { name: "Cupra", path: File5 },
      { name: "DS", path: File6 },
      { name: "Ferrari", path: File7 },
      { name: "Rollsroyce", path: File8 },
    ],
    "Problem 3 (Easy)": [
      { name: "Beacons", path: File9 },
      { name: "Blackbox", path: File10 },
      { name: "Hugging Chat", path: File11 },
      { name: "Perplexity", path: File12 },
    ],
    "Problem 4 (Easy)": [
      { name: "Burger", path: File13 },
      { name: "Dosa", path: File14 },
      { name: "Pizza", path: File15 },
      { name: "poori", path: File16 },
    ],
    "Problem 5 (Easy)": [
      { name: "Maldini", path: File17 },
      { name: "Muller", path: File18 },
      { name: "Pele", path: File19 },
      { name: "Puskas", path: File20 },
    ],
  };

  const saveAsFile = async (file) => {
    try {
      const response = await fetch(file.path);
      const textData = await response.text();

      const handle = await window.showSaveFilePicker({
        suggestedName: file.name + ".txt",
        types: [{ description: "Text File", accept: { "text/plain": [".txt"] } }],
      });

      const writable = await handle.createWritable();
      await writable.write(textData);
      await writable.close();

      alert(`✅ File saved successfully!`);
    } catch (error) {
      console.error("File save failed:", error);
      alert("⚠ File save canceled or failed.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>📄 Download & Save Text Files</h2>

      {Object.entries(textFiles).map(([problemTitle, files]) => (
        <div key={problemTitle} style={{ marginBottom: "20px" }}>
          <h3 style={{ textAlign: "left", maxWidth: "400px", margin: "10px auto", color: "#333" }}>
            {problemTitle}
          </h3>
          <ul style={{ listStyle: "none", padding: 0, maxWidth: "400px", margin: "0 auto" }}>
            {files.map((file, index) => (
              <li
                key={index}
                style={{
                  margin: "12px 0",
                  padding: "12px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "16px", fontWeight: "bold" }}>{file.name}</span>
                <button
                  onClick={() => saveAsFile(file)}
                  style={{
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "background 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
                >
                  Save As
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2 style={{ color: "#2c3e50", marginTop: "40px" }}>📊 Google Sheets Data</h2>
      <p><a href={sheetURL} target="_blank" rel="noopener noreferrer">📂 View Google Sheet</a></p>
    </div>
  );
};

export default StoringText;
