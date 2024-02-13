import { useState, useEffect } from 'react';

function MouseTracker() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <>
      <p>Mouse coordinates:</p>
      <p>X + Y: {coordinates.x + coordinates.y}</p>
      <p>X: {coordinates.x}</p>
      <p>Y: {coordinates.y}</p>
    </>
  );
}

export default MouseTracker;
