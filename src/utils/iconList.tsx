import React from 'react';
import Svg, { Path } from 'react-native-svg';

const iconList = {
  close: {
    svg: (
      <Path
        d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
      />
    ),
  },
  backButton: {
    svg: (
      <Path d="M18.71 10.5c0 .547-.429.977-.937.977H4.493l5.194 4.921c.391.352.391.977.04 1.329-.352.39-.938.39-1.329.039l-6.875-6.563c-.195-.195-.273-.43-.273-.703 0-.234.078-.469.273-.664l6.875-6.563c.391-.351.977-.351 1.329.04a.932.932 0 0 1-.04 1.328L4.492 9.562h13.281c.547 0 .938.43.938.938z" />
    ),
    viewBox: '0 0 20 20',
  },
};

export default iconList;
