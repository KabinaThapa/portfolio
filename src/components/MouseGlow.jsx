import React, { useState, useEffect } from 'react';


function MouseGlowEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
   
      <div
        className="glow w-full"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
   
  );
}

export default MouseGlowEffect;
