import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Colour({ allColours }) {
  const { colour } = useParams();
  const [selColour, setColour] = useState({});
  useEffect(() => {
    colour;
    let getColours = allColours.find(
      (elem) => elem.name.toLowerCase() == colour
    );

    setColour(getColours);
    console.log(getColours);
  }, [colour]);

  return (
    <div>
      {selColour ? (
        <>
          <h1>Colours</h1>
          <h6>{selColour.name}</h6>
        </>
      ) : (
        <h1>No Colour Found</h1>
      )}
    </div>
  );
}

export default Colour;
