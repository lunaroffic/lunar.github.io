import React, { useState, useEffect, useRef } from 'react';
import './FloatingButton.css';
import LinkButton from "./LinkButton";

function FloatingButton() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
           if(buttonRef.current){
                const rect = buttonRef.current.getBoundingClientRect();
                const offsetX = rect.width / 2;
                const offsetY = rect.height / 2;
                setPosition({
                    x: e.clientX - offsetX,
                    y: e.clientY - offsetY,
                });

            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="floating-button-container" style={{ top: position.y, left: position.x }} ref={buttonRef}>
          <LinkButton text="Добавить меня"/>
        </div>
    );
}

export default FloatingButton;