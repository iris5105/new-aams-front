import React, { useState, useRef } from 'react';

const SeperatePage_TB = () => {
  const [topHeight, setTopHeight] = useState(50); // 위쪽 화면의 비율
  const resizerRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    const startY = e.clientY;
    const startTopHeight = topHeight;

    const handleMouseMove = (moveEvent) => {
      const diffY = moveEvent.clientY - startY;
      const newTopHeight = Math.min(Math.max(startTopHeight + (diffY / containerRef.current.clientHeight) * 100, 10), 90);
      setTopHeight(newTopHeight);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>
      <div style={{ height: `${topHeight}%`, backgroundColor: 'lightblue' }}>위쪽 화면</div>
      <div
        ref={resizerRef}
        onMouseDown={handleMouseDown}
        style={{
          cursor: 'row-resize',
          height: '5px',
          backgroundColor: '#aaa',
        }}
      />
      <div style={{ height: `${100 - topHeight}%`, backgroundColor: 'lightgreen' }}>아래쪽 화면</div>
    </div>
  );
};

export default SeperatePage_TB;
