import { useRef, useEffect } from 'react'

type DrawCallbackType = (context: CanvasRenderingContext2D) => void

function useCanvas(
  draw: DrawCallbackType
): React.MutableRefObject<HTMLCanvasElement | null> {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      console.log('canvas is null, please debug')
      return
    }

    const context = canvas.getContext('2d') as CanvasRenderingContext2D

    if (!context) {
      console.log('context is null, please debug')
      return
    }

    draw(context)
  }, [draw, canvasRef])

  return canvasRef
}

export default useCanvas
