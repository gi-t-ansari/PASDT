import React from "react";
import { BACKEND_URL, date, KEY  } from "../config";

function CoordinateTwo({ data }) {
  return (
    <div style={{ padding: "50px" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {data.slice(2, 4).map((ele) => (
          <div style={{ width: "400px" }}>
            <img
              width={400}
              src={`${BACKEND_URL}archive/natural/${date}/png/${ele.image}.png?api_key=${KEY}`}
              alt="earth-1"
            />
            <p>{ele.caption}</p>
            <h5>{ele.date}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoordinateTwo;
