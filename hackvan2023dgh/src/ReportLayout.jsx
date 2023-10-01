import React, { useEffect } from "react";
import { useState } from "react";
// ! This is the code for converting JSON to CSV
// import { Parser } from "json2csv";

// ! This is the code for converting JSON to CSV

// function convertJsonToCsv(jsonData) {
//   try {
//     const parser = new Parser();
//     const csv = parser.parse(jsonData);
//     return csv;
//   } catch (error) {
//     console.error("Error converting JSON to CSV:", error);
//     return "";
//   }
// }

// function downloadCsv(csvData, filename) {
//   const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = filename;
//   a.click();
//   URL.revokeObjectURL(url);
// }

const convertJsonToBlob = (jsonData) => {
  const jsonContent = JSON.stringify(jsonData);
  const blob = new Blob([jsonContent], { type: "application/json" });
  return blob;
};

const downloadJsonAsFile = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
function ReportLayout() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_PORT}/client/get`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  async function postToGoogleSheets() {
    try {
        

        let requestOptions = {
          method: 'POST',
          body: jsonData,
          redirect: 'follow'
        };
        
        fetch("https://script.google.com/macros/s/AKfycbw92BMeLOmp72aA_8YIq9s_cWtYkDQTQzxkQveRyPnOaNFw98AJ7LaJjwAuL6MjNOnO/exec", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.log(jsonData);

  return (
    <div>
      {/* <button onClick={fetchData}>Fetch JSON</button> */}
      {/* Add code to convert and download the JSON here */}

      <button
        onClick={() => {
          if (jsonData) {
            const blob = convertJsonToBlob(jsonData);
            downloadJsonAsFile(blob, "data.json");
          }
        }}
      >
        Download JSON
      </button>
      {/* // !This is the code for converting JSON to CSV */}
      {/* <button
        onClick={() => {
          if (jsonData) {
            const csvData = convertJsonToCsv(jsonData);
            downloadCsv(csvData, "data.csv");
          }
        }}
      >
        Download CSV
      </button> */}
      <br></br>
      <button onClick={postToGoogleSheets}>postToGoogleSheets</button>
    </div>
  );
}

export default ReportLayout;
