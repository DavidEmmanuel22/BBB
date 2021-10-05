import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackIcon = () => {
  return (
    <Svg width="20" height="20" fill="none">
      <Path
        d="M18.71 10.5c0 .547-.429.977-.937.977H4.493l5.194 4.921c.391.352.391.977.04 1.329-.352.39-.938.39-1.329.039l-6.875-6.563c-.195-.195-.273-.43-.273-.703 0-.234.078-.469.273-.664l6.875-6.563c.391-.351.977-.351 1.329.04a.932.932 0 0 1-.04 1.328L4.492 9.562h13.281c.547 0 .938.43.938.938z"
        fill="#fff"
      />
    </Svg>
  );
};

export default BackIcon;
