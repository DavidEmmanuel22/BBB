import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Delivered = () => {
  return (
    <Svg width="20" height="20" fill="none">
      <Path
        fill="#1A4E8A"
        d="M18.516 6.867l-1.993-4.062c-.312-.625-.976-1.055-1.68-1.055H5.118c-.703 0-1.367.43-1.68 1.055L1.446 6.867c-.156.235-.195.547-.195.82v9.063c0 1.406 1.094 2.5 2.5 2.5h12.5c1.367 0 2.5-1.094 2.5-2.5V7.687a1.54 1.54 0 00-.234-.82zM10.625 3h4.219c.234 0 .43.156.547.352l1.718 3.398h-6.484V3zm-6.055.352c.117-.196.313-.352.547-.352h4.258v3.75H2.852L4.57 3.352zM17.5 16.75c0 .703-.586 1.25-1.25 1.25H3.75c-.703 0-1.25-.547-1.25-1.25V8h15v8.75zm-8.984-1.406a.588.588 0 00.43.156.59.59 0 00.429-.156l4.18-4.18c.234-.234.234-.625 0-.898a.662.662 0 00-.899 0l-3.71 3.75-1.641-1.641a.662.662 0 00-.899 0c-.234.234-.234.625 0 .898l2.11 2.07z"
      />
    </Svg>
  );
};

export default Delivered;