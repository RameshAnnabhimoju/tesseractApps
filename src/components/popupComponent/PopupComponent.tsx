import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./PopupStyles.css";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  position?: { top: number; left: number } | null;
  children: React.ReactNode;
  onMouseLeave?: () => void;
}

const PopupComponent = ({
  isOpen,
  onClose,
  containerRef,
  position,
  children,
  onMouseLeave,
}: PopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !containerRef.current) return null;

  const popupStyle: React.CSSProperties = {
    position: "fixed",
    top: position?.top || 0,
    left: position?.left || 0,
    transform: "translateX(-50%)",
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 8px 8px rgba(0,0,0,0.1)",
    zIndex: 3000,
  };
  const popupTriangle: React.CSSProperties = {
    position: "fixed",
    top: -10, // Position it above the popup
    left: "50%", // Center it horizontally
    transform: "translateX(-50%)", // Center it exactly
    zIndex: 3000,
  };

  return ReactDOM.createPortal(
    <div ref={popupRef} style={popupStyle} onMouseLeave={onMouseLeave}>
      <div style={popupTriangle}>
        <svg viewBox="0 0 20 15" width="20px" height="15px">
          <path
            d="M10 2
         A1.2 1.2 0 0 1 11.2 2.7
         L17.5 10
         A1.2 1.2 0 0 1 16.9 11.7
         L3.1 11.7
         A1.2 1.2 0 0 1 2.5 10
         L8.8 2.7
         A1.2 1.2 0 0 1 10 2"
            fill="white"
          />
        </svg>
      </div>
      {children}
    </div>,
    document.body
  );
};

export default PopupComponent;
