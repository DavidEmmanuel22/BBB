import React from 'react';
import Svg, {Path} from 'react-native-svg';

const FavoritChecked = () => {
  return (
    <Svg width="32" height="32" fill="none">
      <Path
        fill="#EE2737"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"
      />
      <Path
        fill="#fff"
        d="M22.75 16.469l-6.031 6.25c-.407.406-1.063.406-1.438 0l-6.062-6.25c-1.75-1.813-1.656-4.813.312-6.5 1.688-1.469 4.281-1.188 5.844.406l.625.656.594-.656c1.562-1.594 4.125-1.875 5.875-.406 1.937 1.687 2.031 4.687.281 6.5z"
      />
    </Svg>
  );
};

export default FavoritChecked;
