import React, { useState, useRef } from 'react';

const SeperatePage_TBR = () => {
  // 패널의 기본 크기 상태
  const [width, setWidth] = useState(400); // 초기 너비
  const [height, setHeight] = useState(300); // 초기 높이

  // 고정 여부 상태
  const [isHeightFixed, setIsHeightFixed] = useState(false);
  const [isWidthFixed, setIsWidthFixed] = useState(false);

  // 가로/세로 길이 조절 모드
  const [isWidthResizable, setIsWidthResizable] = useState(true); // 가로 길이 조절 여부
  const [isHeightResizable, setIsHeightResizable] = useState(true); // 세로 길이 조절 여부

  const resizerRef = useRef(null);
  const panelRef = useRef(null);

  // 가로 크기 조정
  const handleWidthResize = (e) => {
    if (isWidthFixed || !isWidthResizable) return; // 고정되었거나, 가로 길이 조정이 비활성화된 경우

    const newWidth = e.clientX - panelRef.current.offsetLeft;
    if (newWidth > 100) setWidth(newWidth);
  };

  // 세로 크기 조정
  const handleHeightResize = (e) => {
    if (isHeightFixed || !isHeightResizable) return; // 고정되었거나, 세로 길이 조정이 비활성화된 경우

    const newHeight = e.clientY - panelRef.current.offsetTop;
    if (newHeight > 100) setHeight(newHeight);
  };

  // 마우스 다운 이벤트 - 가로/세로 리사이저에 대해
  const handleMouseDown = (e, type) => {
    e.preventDefault();
    if (type === 'width') {
      document.addEventListener('mousemove', handleWidthResize);
      document.addEventListener('mouseup', handleMouseUp);
    } else if (type === 'height') {
      document.addEventListener('mousemove', handleHeightResize);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  // 마우스 업 이벤트 (드래그 종료)
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleWidthResize);
    document.removeEventListener('mousemove', handleHeightResize);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div
        ref={panelRef}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: '2px solid black',
          position: 'relative',
          transition: 'width 0.2s, height 0.2s',
        }}
      >
        <div
          onMouseDown={(e) => handleMouseDown(e, 'width')}
          style={{
            position: 'absolute',
            top: '0',
            right: '-5px',
            height: '100%',
            width: '10px',
            cursor: 'ew-resize',
            backgroundColor: 'lightgray',
          }}
        ></div>

        <div
          onMouseDown={(e) => handleMouseDown(e, 'height')}
          style={{
            position: 'absolute',
            bottom: '-5px',
            left: '0',
            width: '100%',
            height: '10px',
            cursor: 'ns-resize',
            backgroundColor: 'lightgray',
          }}
        ></div>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={isWidthFixed}
            onChange={() => setIsWidthFixed(!isWidthFixed)}
          />
          높이 고정
        </label>

        <label style={{ marginLeft: '20px' }}>
          <input
            type="checkbox"
            checked={isHeightFixed}
            onChange={() => setIsHeightFixed(!isHeightFixed)}
          />
          가로 고정
        </label>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setIsWidthResizable(!isWidthResizable)}>
          {isWidthResizable ? '가로 길이 고정' : '가로 길이 조정 가능'}
        </button>
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => setIsHeightResizable(!isHeightResizable)}
        >
          {isHeightResizable ? '세로 길이 고정' : '세로 길이 조정 가능'}
        </button>
      </div>
    </div>
  );
};

export default SeperatePage_TBR;
