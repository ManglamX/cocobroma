'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only apply on devices with a fine pointer (mouse/trackpad)
    if (window.matchMedia('(pointer: fine)').matches) {
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      const updateHoverState = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable = target.closest('a') || target.closest('button') || target.closest('input');
        setHovering(!!isClickable);
      };

      window.addEventListener('mousemove', updatePosition);
      window.addEventListener('mouseover', updateHoverState);

      return () => {
        window.removeEventListener('mousemove', updatePosition);
        window.removeEventListener('mouseover', updateHoverState);
      };
    }
  }, []);

  // Only render if position has been set (to avoid jumping from 0,0)
  if (position.x === 0 && position.y === 0) return null;

  return (
    <div 
      className={`cursor-dot hidden sm:block ${hovering ? 'expanded' : ''}`} 
      style={{ left: position.x - 5, top: position.y - 5 }} 
    />
  );
}
