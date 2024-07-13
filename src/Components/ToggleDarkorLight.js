import React, { useState } from 'react'; //using Hooks

const ToggleDarkorLight = () => {
  const [colour, mode] = useState(false);

  const toggleMode = () => {
    mode(!colour);
    document.body.classList.toggle('dark-mode', !colour);
  };

  return (
    <button onClick={toggleMode} className="btn btn-primary">
      {colour ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ToggleDarkorLight;
