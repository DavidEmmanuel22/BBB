import React from 'react';
import Svg, { Path } from 'react-native-svg';

const RightArrow = () => {
  return (
    <Svg width="16" height="16" fill="none">
      <Path
        fill="#495057"
        d="M6.531 1.5l5.719 5.969c.125.156.219.343.219.531a.738.738 0 01-.219.5l-5.719 5.969a.746.746 0 01-1.062.031c-.313-.281-.313-.75-.032-1.063l5.25-5.468-5.25-5.438A.746.746 0 015.47 1.47a.746.746 0 011.06.03z"
      />
    </Svg>
  );
};

export default RightArrow;
