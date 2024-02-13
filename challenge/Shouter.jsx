import { useState } from 'react';

function Shouter() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value.toUpperCase());
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />
      <div>
        <strong>Uppercase Output:</strong> {inputText}
      </div>
    </>
  );
}

export default Shouter;
