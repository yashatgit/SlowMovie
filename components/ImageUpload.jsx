import React from 'react';
import api from '../utils/api';

function ImageUpload() {
  const formRef = React.useRef();

  return (
    <div>
      <input ref={formRef} type="file" accept="image/*" name="file" />
      <button
        onClick={(e) => {
          const formData = new FormData();
          formData.append('file', formRef.current.files[0]);
          api.upload('upload', formData);
          return false;
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default ImageUpload;
