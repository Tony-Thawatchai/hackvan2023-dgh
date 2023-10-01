import ArrowBackIosNewIcon from "@mui/icons-material/
import React from "react";
import { useNavigate } from "react-router-dom";

function SingelClientLayout() {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" topBar"></div>
      <div className=" w-full text-center h-[30%] flex flex-col items-center justify-around  px-[4%] ">
        <button
          onClick={() => navigate("/volunteerhome")}
          className="  backBTN self-start"
        >
          {" "}
          <ArrowBackIosNewIcon /> Back
        </button>
        <div className="w-[50%] mx-auto">
          <h1 className="pageHeadline">Check-in a Client</h1>
        </div>
      </div>
      <div className="main">
        <p className="pageDescription uppercase ">SEARCHING BY:</p>
        <ButtonBar values={buttonItems} onSelect={handleButtonClick} />
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInput(event.target.value)
            }
            variant="outlined"
            fullWidth
            label="Search"
            // className="w-[50%]"
          />
        </div>

        {searchResults != null
          ? searchResults.map((result, index) => (
              <NameCard key={index} data={result} />
            ))
          : null}
      </div>
    </div>
  );
}

export default SingelClientLayout;
