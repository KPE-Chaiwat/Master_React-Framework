import React, { useState, useRef } from "react";
import "./FixedWidthFlexbox.css";

const BodyResizeBar = (props) => {
  const { widgetLeft, widgetBody } = props;
  const [width, setWidth] = useState(250);
  const [left, setLeft] = useState(0);
  const sidebarRef = useRef(null);
  const isResizing = useRef(false);
  const isMoving = useRef(false);
  const initialMouseX = useRef(0);
  const initialLeft = useRef(0);

  const handleMouseDownResize = () => {
    isResizing.current = true;
  };

  const handleMouseDownMove = (e) => {
    isMoving.current = true;
    initialMouseX.current = e.clientX;
    initialLeft.current = left;
  };

  const handleMouseMove = (e) => {
    if (isResizing.current) {
      const newWidth =
        e.clientX - sidebarRef.current.getBoundingClientRect().left;
      const constrainedWidth = Math.min(Math.max(newWidth, 150), 450); // Min width 50px, max width 450px
      setWidth(constrainedWidth);
    } else if (isMoving.current) {
      const deltaX = e.clientX - initialMouseX.current;
      const newLeft = initialLeft.current + deltaX;
      // Prevent moving beyond the viewport boundaries
      const maxLeft = window.innerWidth - width;
      const constrainedLeft = Math.min(Math.max(newLeft, -width), maxLeft);
      setLeft(constrainedLeft);
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    isMoving.current = false;
  };

  return (
    <div
      className="sidebar-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="resizable-sidebar"
        ref={sidebarRef}
        style={{ width, left }}
      >
        <div className="move-handle" onMouseDown={handleMouseDownMove}></div>
        <div className="content">{widgetLeft}</div>
        <div className="resizer" onMouseDown={handleMouseDownResize}></div>
      </div>
      <div className="content">{widgetBody}</div>
    </div>
  );
};

export default BodyResizeBar;
