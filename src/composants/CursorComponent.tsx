import React, { useEffect, useRef } from 'react';
import './CSS/Cursor/Cursor.css';

const CursorComponent: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.left = `${e.clientX}px`;
        cursorInnerRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('click');
      }
      if (cursorInnerRef.current) {
        cursorInnerRef.current.classList.add('cursorinnerhover');
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('click');
      }
      if (cursorInnerRef.current) {
        cursorInnerRef.current.classList.remove('cursorinnerhover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor2" ref={cursorInnerRef}></div>
    </>
  );
};

export default CursorComponent;
