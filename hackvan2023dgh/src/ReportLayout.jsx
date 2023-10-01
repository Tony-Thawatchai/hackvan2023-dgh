import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
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
          `${process.env.REACT_APP_API_PORT}/client/all`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setJsonData(data);
        console.log('jsonDataLoaded', data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  async function postToGoogleSheets(googleJsonData) {
    // if (googleJsonData === null || googleJsonData === undefined) {
    //   console.error("googleJsonData is null");
    //   return;
    // }

    try {
        
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/plain;charset=utf-8");
      
      // var raw = JSON.stringify([
      //   {
      //     "_id": "6517d3ec3e350b5fb803e6c1",
      //     "name": "Jane Doe",
      //     "email": "a@a.col",
      //     "address": "12 Holly St",
      //     "__v": 0,
      //     "FamilyMount": 3,
      //     "servedDate": "10/1/2023"
      //   },
      //   {
      //     "_id": "6517d3ee3e350b5fb803e6c3",
      //     "name": "Nahla Fariba",
      //     "email": "a@a.col",
      //     "address": "188 Bidwell st.",
      //     "__v": 0,
      //     "servedDate": "9/30/2023"
      //   },
      //   {
      //     "_id": "6517dc9f9a701e3090a14018",
      //     "name": "Client 2",
      //     "email": "a@a.col",
      //     "address": "123 Main St",
      //     "__v": 0,
      //     "servedDate": "9/30/2023"
      //   },
      //   {
      //     "_id": "6517dce89a701e3090a1401e",
      //     "name": "Client 23333",
      //     "email": "a@a.col",
      //     "address": "123 Main St",
      //     "__v": 0,
      //     "servedDate": "9/30/2023"
      //   },
      //   {
      //     "_id": "6517fb924f647e050ab612ea",
      //     "name": "Client 8888",
      //     "address": "123 Main St",
      //     "FamilyMount": 3,
      //     "servedDate": "9/30/2023",
      //     "__v": 0
      //   },
      //   {
      //     "_id": "6518069316338119562a6b20",
      //     "name": "Client 999",
      //     "address": "23 Beach Ave",
      //     "FamilyMount": 2,
      //     "servedDate": "2023-09-01",
      //     "__v": 0
      //   },
      //   {
      //     "_id": "65192ad64564334857e906ca",
      //     "householdId": "6517d3ec3e350b5fb803e6c1",
      //     "sex": "M",
      //     "yearOfBirth": 2000,
      //     "isDependent": true,
      //     "dietaryRestrictions": [],
      //     "idType": "BCID",
      //     "idNumber": "1234",
      //     "__v": 0
      //   },
      //   {
      //     "_id": "651949eb7d531c655ce33616",
      //     "householdId": "6517d3ec3e350b5fb803e6c1",
      //     "sex": "M",
      //     "yearOfBirth": 2000,
      //     "isDependent": true,
      //     "dietaryRestrictions": [],
      //     "idType": "BCID",
      //     "idNumber": "1234",
      //     "__v": 0
      //   },
      //   {
      //     "_id": "65194a0c967d5e7f6dcb277c",
      //     "householdId": "6517d3ec3e350b5fb803e6c1",
      //     "sex": "M",
      //     "yearOfBirth": 2000,
      //     "isDependent": true,
      //     "dietaryRestrictions": [],
      //     "idType": "BCID",
      //     "idNumber": "1234",
      //     "__v": 0
      //   }
      // ]);
      
      var data = JSON.stringify(googleJsonData);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
      };


      
      fetch("https://script.google.com/macros/s/AKfycbw92BMeLOmp72aA_8YIq9s_cWtYkDQTQzxkQveRyPnOaNFw98AJ7LaJjwAuL6MjNOnO/exec", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


      // let data = googleJsonData;
      // console.log('here');
      // console.log(data);
      // let config = {
      //   method: 'post',
      //   maxBodyLength: Infinity,
      //   url: 'https://script.google.com/macros/s/AKfycbw92BMeLOmp72aA_8YIq9s_cWtYkDQTQzxkQveRyPnOaNFw98AJ7LaJjwAuL6MjNOnO/exec',
      //   headers: { 
      //     'Content-Type': "text/plain;charset=utf-8"
      //   },
      //   data : data
      // };
      
      // axios.request(config)
      // .then((response) => {
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
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
      <button onClick={() => postToGoogleSheets(jsonData)}>postToGoogleSheets</button>
    </div>
  );
}

export default ReportLayout;
