import React from 'react';
import './MyComponent.css'; // Проверьте, что файл существует

function MyComponent({ text }) {
  return (
    <div className="my-component">
      <p>{text}</p>
      <button onClick={() => alert('Клик!')}>Нажми меня</button>
    </div>
  );
}

export default MyComponent;