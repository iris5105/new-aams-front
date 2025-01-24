import React, { useState, useRef } from 'react';

// 좌우 분할 후 우측 상하 분할 컴포넌트
const SeperatePage_LTB = () => {
  const [leftWidth, setLeftWidth] = useState(50); // 좌측 화면의 비율
  const [topHeight, setTopHeight] = useState(50); // 우측 화면의 상단 비율
  const resizerLRRef = useRef(null); // 좌우 분할용 리사이저
  const resizerTBRef = useRef(null); // 상하 분할용 리사이저
  const containerRef = useRef(null);

  // 좌우 분할 마우스 다운 이벤트 처리
  const handleMouseDown_LR = (e) => {
    const startX = e.clientX;
    const startLeftWidth = leftWidth;

    const handleMouseMove_LR = (moveEvent) => {
      const diffX = moveEvent.clientX - startX;
      const newLeftWidth = Math.min(Math.max(startLeftWidth + (diffX / containerRef.current.clientWidth) * 100, 10), 90);
      setLeftWidth(newLeftWidth);
    };

    const handleMouseUp_LR = () => {
      document.removeEventListener('mousemove', handleMouseMove_LR);
      document.removeEventListener('mouseup', handleMouseUp_LR);
    };

    document.addEventListener('mousemove', handleMouseMove_LR);
    document.addEventListener('mouseup', handleMouseUp_LR);
  };

  // 상하 분할 마우스 다운 이벤트 처리
  const handleMouseDown_TB = (e) => {
    const startY = e.clientY;
    const startTopHeight = topHeight;

    const handleMouseMove_TB = (moveEvent) => {
      const diffY = moveEvent.clientY - startY;
      const newTopHeight = Math.min(Math.max(startTopHeight + (diffY / containerRef.current.clientHeight) * 100, 10), 90);
      setTopHeight(newTopHeight);
    };

    const handleMouseUp_TB = () => {
      document.removeEventListener('mousemove', handleMouseMove_TB);
      document.removeEventListener('mouseup', handleMouseUp_TB);
    };

    document.addEventListener('mousemove', handleMouseMove_TB);
    document.addEventListener('mouseup', handleMouseUp_TB);
  };

  return (
    <div ref={containerRef} style={{ display: 'flex', width: '100%', height: '100vh' }}>
      {/* 좌측 화면 */}
      <div style={{ width: `${leftWidth}%`, backgroundColor: 'lightblue' }}>좌측 화면</div>

      {/* 리사이저 */}
      <div
        ref={resizerLRRef}
        onMouseDown={handleMouseDown_LR}
        style={{
          cursor: 'col-resize',
          width: '5px',
          backgroundColor: '#aaa',
        }}
      />

      {/* 우측 화면 (상하 분할) */}
      <div style={{ display: 'flex', flexDirection: 'column', width: `${100 - leftWidth}%`, height: '100%' }}>
        {/* 상단 화면 */}
        <div style={{ height: `${topHeight}%`, backgroundColor: 'lightgreen' }}>
          상단 화면
        </div>

        {/* 상하 리사이저 */}
        <div
          ref={resizerTBRef}
          onMouseDown={handleMouseDown_TB}
          style={{
            cursor: 'row-resize',
            height: '5px',
            backgroundColor: '#aaa',
          }}
        />

        {/* 하단 화면 */}
        <div style={{ height: `${100 - topHeight}%`, backgroundColor: 'lightcoral' }}>
          하단 화면
        </div>
      </div>
    </div>
  );
};

export default SeperatePage_LTB;
