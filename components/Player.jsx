import React from 'react';
import api from '../utils/api';

function Player() {
  const [allVideos, setAllVideos] = React.useState([]);
  const videoRef = React.useRef();
  const paramsRef = React.useRef();

  React.useEffect(() => {
    api.post('action', { type: 'loadVideos' }).then((res) => {
      setAllVideos(res.videos);
    });
  }, []);

  return (
    <div>
      <select ref={videoRef}>
        {allVideos.map((vid) => (
          <option key={vid}>{vid}</option>
        ))}
      </select>
      <input ref={paramsRef} placeholder="-d 150 -i 5 -s 5000"></input>
      <button
        onClick={() =>
          api
            .post('action', {
              type: 'playVideo',
              params: `${videoRef.current.value} ${paramsRef.current.value}`,
            })
            .then((res) => {})
        }
      >
        Play
      </button>
      <a href="https://github.com/TomWhitwell/SlowMovie#usage" target="new">
        Params Help
      </a>
    </div>
  );
}

export default Player;
