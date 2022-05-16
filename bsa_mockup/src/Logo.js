import React from 'react';

import './Logo.css';

class Logo extends React.Component {
  render() {
    return (
      <>
        <div className='logo'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 116.27 57.98'>
            <polyline
              id='A'
              className='cls-1'
              points='83.6 18.43 98.53 3.51 113.45 18.43 113.46 39.54 98.53 54.47 83.6 39.54 98.53 24.62 112.58 38.66'
            />
            <polyline
              id='S2'
              className='cls-1'
              points='58.13 24.62 73.06 39.54 58.13 54.47 43.21 39.54'
            />
            <polyline
              id='S1'
              className='cls-1'
              points='73.06 18.43 58.13 3.51 43.21 18.43 58.13 33.36'
            />
            <polyline
              id='B'
              className='cls-1'
              points='17.74 33.36 32.66 18.43 17.74 3.51 2.81 18.43 2.81 39.54 17.74 54.47 32.66 39.54 17.74 24.62'
            />
          </svg>
        </div>
        <title>BLOCKCHAIN</title>
      </>
    );
  }
}

export default Logo;
