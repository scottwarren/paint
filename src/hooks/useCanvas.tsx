import { useRef, useEffect } from "react";

type DrawCallbackType = (context: CanvasRenderingContext2D) => void;

const useCanvas = (draw: DrawCallbackType) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      console.log("canvas is null, please debug");
      return;
    }

    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    if (!context) {
      console.log("context is null, please debug");
      return;
    }

    draw(context);
  }, [draw, canvasRef]);

  return canvasRef;
};

export default useCanvas;
