import React from 'react';
import ReactCanvasTxt from 'react-canvas-txt';

//https://github.com/neomusic/react-canvas-txt
const drawTxtProps = {
  x: 0,
  y: 0,
  fontSize: 48,
  width: 800,
  height: 480,
};

const Canvas = () => {
  const [testToRender, setTestToRender] = React.useState('');
  return (
    <div>
      <div key={testToRender} style={{ border: '1px solid red' }}>
        <ReactCanvasTxt
          text={testToRender}
          drawTxtProps={drawTxtProps}
          width={800}
          height={480}
        />
      </div>

      <input
        placeholder="Enter Quote"
        onBlur={(e) => {
          setTestToRender(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Canvas;
