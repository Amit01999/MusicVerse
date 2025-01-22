'use client';
import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const blurRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && blurRef.current) {
        cursorRef.current.style.left = `${e.pageX}px`;
        cursorRef.current.style.top = `${e.pageY}px`;
        blurRef.current.style.left = `${e.pageX - 100}px`;
        blurRef.current.style.top = `${e.pageY - 100}px`;
      }
    };

    const onMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1.5)';
        cursorRef.current.style.boxShadow =
          '0 0 20px #44b433, 0 0 40px #44b433';
      }
    };

    const onMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1)';
        cursorRef.current.style.boxShadow =
          '0 0 10px #44b433, 0 0 20px #44b433';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-blur" ref={blurRef}></div>
    </>
  );
};

export default Cursor;
