import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Cancelled = () => {
  return (
    <Svg width="20" height="21" fill="none">
      <Path
        fill="#EB5C5C"
        d="M10 .5C4.453.5 0 4.992 0 10.5a9.97 9.97 0 0010 10c5.508 0 10-4.453 10-10 0-5.508-4.492-10-10-10zm-8.75 10c0-2.188.781-4.18 2.11-5.703L15.702 17.14c-1.522 1.329-3.514 2.11-5.702 2.11a8.736 8.736 0 01-8.75-8.75zm15.352 5.742L4.258 3.898A8.682 8.682 0 0110 1.75c4.805 0 8.75 3.945 8.75 8.75a8.76 8.76 0 01-2.148 5.742z"
      />
    </Svg>
  );
};

export default Cancelled;
