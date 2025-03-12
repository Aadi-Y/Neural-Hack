import React from "react";
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


const StoringText = () => {
  // List of text files grouped under "Problem 1"
  const textFiles = {
    "Problem 1": [
      { name: "Hodge", path: File1 },
      { name: "Lara", path: File2 },
      { name: "Richards", path: File3 },
      { name: "Sreeshanth", path: File4 },
    ],
    "Problem 2": [
      { name: "Cupra", path: File5 },
      { name: "DS", path: File6 },
      { name: "Ferrari", path: File7 },
      { name: "Rollsroyce", path: File8 },
    ],
    "Problem 3": [
      { name: "Beacons", path: File9 },
      { name: "Blackbox", path: File10 },
      { name: "Hugging Chat", path: File11 },
      { name: "Perplexity", path: File12 },
    ],
  };

  // Function to trigger "Save As" option
  const saveAsFile = async (file) => {
    try {
      // Fetch the file content
      const response = await fetch(file.path);
      const textData = await response.text();

      // Show "Save As" dialog
      const handle = await window.showSaveFilePicker({
        suggestedName: file.name + ".txt",
        types: [{ description: "Text File", accept: { "text/plain": [".txt"] } }],
      });

      // Write to file
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

      {/* Iterate over problems and their files */}
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
    </div>
  );
};

export default StoringText;
