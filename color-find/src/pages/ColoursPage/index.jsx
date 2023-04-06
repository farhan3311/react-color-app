import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

function Colours({ allColours }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Colours</h1>

      <div className="allcolours">
        <ColourList colors={allColours} />
      </div>

      <button className="addBtn" onClick={() => navigate("/colours/new")}>
        New colour
      </button>
    </div>
  );
}

function ColourList({ colors }) {
  return (
    <div>
      {colors.length ? (
        colors.map((colour) => <ColourItem key={colour.hex} {...colour} />)
      ) : (
        <h1>No items found</h1>
      )}
    </div>
  );
}

function ColourItem({ name, hex }) {
  return (
    <div>
      <span className="colour">
        <Link
          className="eachcolour"
          to={`/colours/${name.toLowerCase()}`}
          style={{
            backgroundColor: `#${hex}`,
            padding: "8px",
          }}
        >
          {hex}
        </Link>
      </span>
      <h4>{name}</h4>
    </div>
  );
}

export default Colours;
