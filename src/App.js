import React from "react";
import ColorPicker from "./ColorPicker";
import "./App.css";

const App = () => {
  const colors = [
    "#ff0000",
    "#33ff00",
    "#0d00ff",
    "#f2ff00",
    "#f700ff",
    "#00fbff",
    "#ffae00",
    "#57005a",
    "#ecbacb",
    "#074a00",
    "#f05000",
    "#03b6b9",
    "#4e1616",
    "#ff9100",
    "#144786",
    "#ffea00",
  ];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};


export default App;