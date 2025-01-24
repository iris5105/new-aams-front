import React, { useState, useRef } from 'react';

const SeperatePage_LR = () => {
  const [leftWidth, setLeftWidth] = useState(50); // 왼쪽 화면의 비율
  const resizerRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const startLeftWidth = leftWidth;

    const handleMouseMove = (moveEvent) => {
      const diffX = moveEvent.clientX - startX;
      const newLeftWidth = Math.min(Math.max(startLeftWidth + (diffX / containerRef.current.clientWidth) * 100, 10), 90);
      setLeftWidth(newLeftWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div ref={containerRef} style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <div style={{ width: `${leftWidth}%`, backgroundColor: 'lightblue' }}>왼쪽 화면</div>
      <div
        ref={resizerRef}
        onMouseDown={handleMouseDown}
        style={{
          cursor: 'col-resize',
          width: '5px',
          backgroundColor: '#aaa',
        }}
      />
      <div style={{ width: `${100 - leftWidth}%`, backgroundColor: 'lightgreen' }}>오른쪽 화면</div>
    </div>
  );
};

export default SeperatePage_LR;
