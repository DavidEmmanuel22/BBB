import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Filter = () => {
  return (
    <Svg width="16" height="16" fill="none">
      <Path
        d="M9.25 12.25H6.719c-.407 0-.719.344-.719.75 0 .438.313.75.719.75h2.5c.437 0 .781-.313.781-.75a.76.76 0 0 0-.75-.75zm5-10H1.719C1.312 2.25 1 2.594 1 3c0 .375.313.75.719.75H14.25c.406 0 .75-.313.75-.719 0-.375-.344-.781-.75-.781zm-2 5H3.719C3.313 7.25 3 7.594 3 8c0 .438.313.75.719.75h8.5c.437 0 .781-.313.781-.75a.76.76 0 0 0-.75-.75z"
        fill="#147BD1"
      />
    </Svg>
  );
};

export default Filter;
