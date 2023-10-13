import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
    document.body.style.backgroundColor = color; 
  };

  const colorListStyle = {
    display: showColorList ? 'block' : 'none',
  };

  return (
    <div className="color-picker">
      <div className="color-list" style={colorListStyle}>
        {colors.map((color, index) => (
          <div
            key={index}
            className="color"
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <button onClick={toggleColorList}>Pick a color</button>
      {selectedColor && (
        <div className="selected-color">
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
