import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const trailRef = useRef<HTMLDivElement>(null);
  const trailElements = useRef<Array<{ element: HTMLDivElement; x: number; y: number; opacity: number }>>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!trailRef.current) return;

    // Create trail elements
    for (let i = 0; i < 10; i++) {
      const trailElement = document.createElement('div');
      trailElement.classList.add('cursor-trail');
      trailRef.current.appendChild(trailElement);
      trailElements.current.push({
        element: trailElement,
        x: 0,
        y: 0,
        opacity: 0
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const updateTrail = () => {
      trailElements.current.forEach((point, index) => {
        if (index === 0) {
          point.x = mousePos.current.x;
          point.y = mousePos.current.y;
          point.opacity = 0.8;
        } else {
          const prevPoint = trailElements.current[index - 1];
          point.x += (prevPoint.x - point.x) * 0.3;
          point.y += (prevPoint.y - point.y) * 0.3;
          point.opacity = prevPoint.opacity * 0.7;
        }

        point.element.style.left = `${point.x}px`;
        point.element.style.top = `${point.y}px`;
        point.element.style.opacity = point.opacity.toString();
      });

      requestAnimationFrame(updateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    updateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (trailRef.current) {
        trailRef.current.innerHTML = '';
      }
      trailElements.current = [];
    };
  }, []);

  return <div ref={trailRef} className="pointer-events-none fixed inset-0 z-50" />;
}
