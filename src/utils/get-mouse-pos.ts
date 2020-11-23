interface MouseCoordinates {
  x: number;
  y: number;
}

function getMousePos(
  canvas: HTMLCanvasElement,
  ev: React.MouseEvent
): MouseCoordinates {
  const rect = canvas.getBoundingClientRect();

  return {
    x: ev.clientX - rect.left,
    y: ev.clientY - rect.top,
  };
}

export default getMousePos;
