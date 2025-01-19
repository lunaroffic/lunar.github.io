import React from 'react';
import './LinkButton.css';

function LinkButton({ text, href }) {
  return (
    <button className="link-button" onClick={() => { if (href) window.open(href, '_blank', 'noopener noreferrer')}}>
      {text}
    </button>
  );
}

export default LinkButton;