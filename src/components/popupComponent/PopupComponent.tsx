import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./PopupStyles.css";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  position?: { top: number; left: number } | null;
  children: React.ReactNode;
}

const PopupComponent = ({
  isOpen,
  onClose,
  containerRef,
  position,
  children,
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
    position: "absolute",
    top: position?.top || 0,
    left: position?.left || 0,
    transform: "translateX(-50%)",
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <div ref={popupRef} style={popupStyle}>
      {children}
    </div>,
    containerRef.current
  );
};

export default PopupComponent;
