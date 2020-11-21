import React from 'react';

import useCanvas from '../hooks/useCanvas';

type CanvasProps = {
  draw: (context: CanvasRenderingContext2D) => void;
};

function Canvas({ draw, ...rest }: CanvasProps): React.ReactElement {
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
}

export default Canvas;
