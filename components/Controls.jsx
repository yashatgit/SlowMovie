import React from 'react';
import api from '../utils/api';

function Controls() {
  return (
    <div>
      <button
        onClick={() => {
          api.post('action', { type: 'shutdown' });
        }}
      >
        Shutdown
      </button>
      <button
        onClick={() => {
          api.post('action', { type: 'restart' });
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default Controls;
