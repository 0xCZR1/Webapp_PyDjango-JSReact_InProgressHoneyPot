import React from 'react';

function Alert({ type, message, timestamp }) {
  return (
    <div className={`alert ${type}`}>
      <span className="message">{message}</span>
      <span className="timestamp">{timestamp}</span>
    </div>
  );
}

export default Alert;
