import React, { useState } from 'react';

function ToggleButton() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button onClick={handleToggle} style={{ backgroundColor: isActive ? 'green' : 'red',
    color: 'white',
    borderRadius: '5px',
    padding: '5px 10px' }}>
        {isActive ? '✔' : 'X'}
      </button>
    </div>
  );
}

export default ToggleButton;
