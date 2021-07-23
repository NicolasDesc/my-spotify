import React, { useState } from 'react'
import { PlayCircleFill, PauseCircleFill, SkipStartFill, SkipEndFill, Shuffle, ArrowRepeat } from 'react-bootstrap-icons';
import { List, VolumeUp } from 'react-bootstrap-icons';
import Slider from 'rc-slider';

import './Footer.scss';
import 'rc-slider/assets/index.css';

export default function Footer() {
  const [volume, setVolume] = useState(0);

  return (
    <div className="footer p-3 d-flex align-items-center">
      <div className="footer-left d-flex align-items-center">
        <div className="me-3">Image</div>
        <div className="d-flex flex-column">
          <div className="fw-bolder">Title</div>
          <div>Artist</div>
        </div>
      </div>
      <div className="footer-center d-flex align-items-center justify-content-center">
        <Shuffle className="mx-2 shuffle-icon green" size={20} />
        <SkipStartFill className="mx-2 skip-start-fill-icon" size={20} />
        <PlayCircleFill className="mx-2 play-circle-fill-icon" size={28} />
        <SkipEndFill className="mx-2 skip-end-fill-icon" size={20} />
        <ArrowRepeat className="mx-2 arrow-repeat-icon green" size={20} />
      </div>
      <div className="footer-right d-flex align-items-center justify-content-end">
        <List className="mx-2 list-icon" size={20} />
        <VolumeUp className="ms-2 me-3 volume-up-icon" size={20} />
        <div style={{ minWidth: '100px' }}>
          <Slider
            value={volume}
            onChange={(value) => setVolume(value)}
            trackStyle={{ backgroundColor: '#1DB954' }}
            handleStyle={{ borderColor: '#FFFFFF', boxShadow: 'none' }}
            railStyle={{ backgroundColor: 'grey' }}
          />
        </div>
      </div>
    </div>
  )
}
