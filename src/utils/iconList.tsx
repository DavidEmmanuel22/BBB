import React from 'react';
import { Path } from 'react-native-svg';

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
  favorite: {
    svg: (
      <Path
        d="M19.047 2.96c-2.149-1.796-5.313-1.522-7.305.509l-.742.82-.781-.82C8.617 1.829 5.414.852 2.914 2.96c-2.46 2.11-2.578 5.86-.39 8.125l7.578 7.812c.234.235.546.352.859.352.351 0 .664-.117.898-.352l7.579-7.812c2.187-2.266 2.07-6.016-.391-8.125zm-.508 7.267L11 18.039l-7.578-7.812c-1.485-1.563-1.797-4.493.312-6.29 2.149-1.835 4.649-.507 5.586.43L11 6.086l1.64-1.719c.9-.937 3.438-2.265 5.587-.43 2.109 1.797 1.796 4.727.312 6.29z"
        fill="#147BD1"
      />
    ),
    viewBox: '0 0 21 20',
  },
  shareArrow: {
    svg: (
      <Path
        d="M6.875 9.25h10.742l-6.172-5.117c-.273-.235-.273-.625-.078-.899.235-.273.625-.273.899-.078l7.5 6.211c.117.156.234.352.234.508 0 .156-.117.352-.234.469l-7.5 6.21c-.118.079-.274.157-.391.157a.63.63 0 0 1-.508-.234c-.195-.274-.195-.665.078-.899l6.172-5.117H6.875c-3.125 0-5.625 2.5-5.625 5.586v1.21c0 .47-.313.743-.625.743A.617.617 0 0 1 0 17.375v-1.21c0-3.83 3.047-6.915 6.875-6.915z"
        fill="#147BD1"
      />
    ),
    viewBox: '0 0 20 20',
  },
  compare: {
    svg: (
      <Path
        d="M16 0H8C6.875 0 6 .906 6 2v12c0 1.125.875 2 2 2h8c1.094 0 2-.875 2-2V2c0-1.094-.906-2-2-2zm1 14c0 .563-.469 1-1 1H8c-.563 0-1-.438-1-1V2c0-.531.438-1 1-1h8c.531 0 1 .469 1 1v12zM.5 3c-.281 0-.5.25-.5.5v9c0 .281.219.5.5.5.25 0 .5-.219.5-.5v-9C1 3.25.75 3 .5 3zm3-1.5c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5.25 0 .5-.219.5-.5V2c0-.25-.25-.5-.5-.5z"
        fill="#147BD1"
      />
    ),
    viewBox: '0 0 18 16',
  },
  rdbChecked: {
    svg: (
      <Path
        d="M10 .5C4.453.5 0 4.992 0 10.5a9.97 9.97 0 0 0 10 10c5.508 0 10-4.453 10-10 0-5.508-4.492-10-10-10zm4.492 8.281-5 5c-.195.235-.469.313-.742.313-.313 0-.586-.078-.781-.313l-2.5-2.5a1.061 1.061 0 0 1 0-1.523c.43-.43 1.093-.43 1.523 0l1.758 1.719 4.219-4.22c.43-.429 1.094-.429 1.523 0 .43.43.43 1.095 0 1.524z"
        fill="#40CA88"
      />
    ),
  },
  rdb: {
    svg: (
      <Path
        d="M13.281 7.57 8.75 12.14l-2.07-2.07a.662.662 0 0 0-.899 0 .662.662 0 0 0 0 .899l2.5 2.5c.117.117.274.156.469.156.156 0 .313-.04.43-.156l5-5a.662.662 0 0 0 0-.899.662.662 0 0 0-.899 0zM10 .5C4.453.5 0 4.992 0 10.5a9.97 9.97 0 0 0 10 10c5.508 0 10-4.453 10-10 0-5.508-4.492-10-10-10zm0 18.75a8.736 8.736 0 0 1-8.75-8.75c0-4.805 3.906-8.75 8.75-8.75 4.805 0 8.75 3.945 8.75 8.75 0 4.844-3.945 8.75-8.75 8.75z"
        fill="#DEE2E6"
      />
    ),
  },
  lowerToHigher: {
    svg: (
      <Path
        d="M9.75 3h1.5c.406 0 .719-.313.719-.75 0-.406-.313-.75-.719-.75h-1.5a.74.74 0 0 0-.75.75c0 .438.313.75.75.75zm0 4h3.469a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75H9.75a.74.74 0 0 0-.75.75c0 .438.313.75.75.75zm7.469 6.5H9.75a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h7.469a.74.74 0 0 0 .75-.75.74.74 0 0 0-.75-.75zM9.75 11h5.469a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75H9.75a.74.74 0 0 0-.75.75c0 .438.313.75.75.75zm-3.313-.5L4.75 12.344V1.78C4.75 1.344 4.406 1 4 1c-.438 0-.75.344-.75.781v10.563L1.531 10.5A.732.732 0 0 0 1 10.281a.849.849 0 0 0-.531.188c-.313.281-.313.75-.031 1.062l2.968 3.25a.755.755 0 0 0 1.094 0l2.969-3.25c.281-.312.281-.781-.032-1.062-.25-.281-.718-.25-1 .031z"
        fill="#212529"
      />
    ),
  },
  higherToLower: {
    svg: (
      <Path
        d="M11.25 13.5h-1.5a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h1.5c.406 0 .719-.313.719-.75 0-.406-.313-.75-.719-.75zm1.969-4H9.75a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h3.469a.74.74 0 0 0 .75-.75.74.74 0 0 0-.75-.75zm2-4H9.75a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h5.469a.74.74 0 0 0 .75-.75.74.74 0 0 0-.75-.75zm2-4H9.75a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h7.469a.74.74 0 0 0 .75-.75.74.74 0 0 0-.75-.75zm-10.782 9L4.75 12.344V1.78C4.75 1.344 4.406 1 4 1c-.438 0-.75.344-.75.781v10.563L1.531 10.5A.732.732 0 0 0 1 10.281a.849.849 0 0 0-.531.188c-.313.281-.313.75-.031 1.062l2.968 3.25a.755.755 0 0 0 1.094 0l2.969-3.25c.281-.312.281-.781-.032-1.062-.25-.281-.718-.25-1 .031z"
        fill="#495057"
      />
    ),
  },
  azIcon: {
    svg: (
      <Path
        d="M13.719 13.5H11.78l2.531-3.281a.716.716 0 0 0 .094-.781A.769.769 0 0 0 13.72 9H10.25a.74.74 0 0 0-.75.75c0 .438.344.75.75.75h1.938l-2.532 3.313a.716.716 0 0 0-.094.78c.126.25.376.407.657.407h3.469c.406 0 .718-.313.718-.75 0-.406-.25-.75-.687-.75zm1.187-7.563-2.219-4.5c-.25-.53-1.093-.53-1.343 0l-2.219 4.5a.74.74 0 0 0 .344 1 .74.74 0 0 0 1-.343l.094-.344h2.843l.156.344c.126.281.407.406.688.406.094 0 .219 0 .313-.063a.74.74 0 0 0 .343-1zM11.312 4.75l.657-1.313.687 1.313h-1.344zM6.439 10.5 4.75 12.344V1.78C4.75 1.344 4.406 1 4 1c-.438 0-.75.344-.75.781v10.563L1.531 10.5A.732.732 0 0 0 1 10.281a.849.849 0 0 0-.531.188c-.313.281-.313.75-.031 1.062l2.968 3.25a.755.755 0 0 0 1.094 0l2.969-3.25c.281-.312.281-.781-.032-1.062-.25-.281-.718-.25-1 .031z"
        fill="#495057"
      />
    ),
  },
  inverseAzIcon: {
    svg: (
      <Path
        d="M10.219 2.5h1.969L9.655 5.813a.716.716 0 0 0-.094.78c.126.25.376.407.688.407h3.469c.406 0 .719-.313.719-.75 0-.406-.344-.75-.72-.75h-1.937l2.531-3.281a.716.716 0 0 0 .094-.781A.769.769 0 0 0 13.72 1H10.25a.74.74 0 0 0-.75.75c0 .438.313.75.719.75zm4.687 11.438-2.219-4.5c-.25-.532-1.093-.532-1.343 0l-2.219 4.5a.74.74 0 0 0 .344 1 .74.74 0 0 0 1-.344l.156-.313h2.813l.187.313a.739.739 0 0 0 .656.437.63.63 0 0 0 .344-.094.775.775 0 0 0 .281-1zm-3.594-1.188.657-1.344.687 1.344h-1.344zM6.439 10.5 4.75 12.344V1.78C4.75 1.344 4.406 1 4 1c-.438 0-.75.344-.75.781v10.563L1.531 10.5A.732.732 0 0 0 1 10.281a.849.849 0 0 0-.531.188c-.313.281-.313.75-.031 1.062l2.968 3.25a.755.755 0 0 0 1.094 0l2.969-3.25c.281-.312.281-.781-.032-1.062-.25-.281-.718-.25-1 .031z"
        fill="#495057"
      />
    ),
  },
  popularity: {
    svg: (
      <Path
        d="m16.5 5.375-4.563-.656L9.876.562A.986.986 0 0 0 8.969 0a.975.975 0 0 0-.875.563L6.03 4.718l-4.562.656C.656 5.5.312 6.5.906 7.094L4.22 10.28l-.782 4.563a.998.998 0 0 0 1 1.156c.157 0 .313-.031.47-.094L9 13.75l4.063 2.156c.156.063.312.125.468.125.594 0 1.094-.531 1-1.187l-.781-4.531 3.313-3.188c.593-.625.25-1.625-.563-1.75zm-4.313 4.656.688 4.063-3.656-1.906a.426.426 0 0 0-.469 0l-3.656 1.906.687-4.063c.032-.156-.031-.312-.125-.437L2.688 6.719l4.093-.594c.157-.031.313-.125.375-.281L9 2.125l1.813 3.719c.062.156.218.25.374.281l4.094.594-2.969 2.875c-.093.125-.156.281-.124.437z"
        fill="#495057"
      />
    ),
  },
  chb: {
    svg: (
      <Path
        d="M16.25 1.75H3.75a2.492 2.492 0 0 0-2.5 2.5v12.5c0 1.406 1.094 2.5 2.5 2.5h12.5c1.367 0 2.5-1.094 2.5-2.5V4.25c0-1.367-1.133-2.5-2.5-2.5zm1.25 15c0 .703-.586 1.25-1.25 1.25H3.75c-.703 0-1.25-.547-1.25-1.25V4.25C2.5 3.586 3.047 3 3.75 3h12.5c.664 0 1.25.586 1.25 1.25v12.5zm-4.219-9.18L8.75 12.14l-2.07-2.07a.662.662 0 0 0-.899 0 .662.662 0 0 0 0 .899l2.5 2.5c.117.117.274.156.469.156.156 0 .313-.04.43-.156l5-5a.662.662 0 0 0 0-.899.662.662 0 0 0-.899 0z"
        fill="#CED4DA"
      />
    ),
  },
  chbChecked: {
    svg: (
      <Path
        d="M16.25 1.75H3.75a2.492 2.492 0 0 0-2.5 2.5v12.5c0 1.406 1.094 2.5 2.5 2.5h12.5c1.367 0 2.5-1.094 2.5-2.5V4.25c0-1.367-1.133-2.5-2.5-2.5zm-1.758 7.031-5 5c-.195.235-.469.313-.742.313-.313 0-.586-.078-.781-.313l-2.5-2.5a1.061 1.061 0 0 1 0-1.523c.43-.43 1.093-.43 1.523 0l1.758 1.719 4.219-4.22c.43-.429 1.094-.429 1.523 0 .43.43.43 1.095 0 1.524z"
        fill="#40CA88"
      />
    ),
  },
  trash: {
    svg: (
      <Path
        d="M17.813 3.625h-2.93l-1.328-2.188C13.203.853 12.617.5 11.953.5H8.008c-.664 0-1.25.352-1.602.938L5.078 3.624h-2.89a.925.925 0 0 0-.938.938c0 .546.39.937.938.937H2.5l.82 13.242c.04 1.016.86 1.758 1.875 1.758h9.57c1.016 0 1.837-.742 1.876-1.758L17.5 5.5h.313c.507 0 .937-.39.937-.938a.95.95 0 0 0-.938-.937zm-9.805-1.25h3.945l.742 1.25h-5.43l.743-1.25zm6.758 16.25h-9.57L4.374 5.5h11.21l-.82 13.125zm-7.93-3.086a.92.92 0 0 0 1.289 0l1.836-1.836 1.875 1.836a.92.92 0 0 0 1.289 0c.39-.39.39-.976 0-1.328l-1.836-1.836 1.836-1.836a.856.856 0 0 0 0-1.289c-.352-.39-.938-.39-1.328 0L9.96 11.086 8.125 9.21c-.39-.352-.977-.352-1.328 0-.39.39-.39.976 0 1.328l1.875 1.836-1.836 1.875a.856.856 0 0 0 0 1.29z"
        fill="#147BD1"
      />
    ),
  },
  delivery: {
    svg: (
      <Path
        d="M19.5 12H19V7.75c0-.594-.219-1.156-.625-1.625l-2.219-2.594C15.875 3.22 15.47 3 15.031 3H13V2c0-1.094-.906-2-2-2H2C.875 0 0 .906 0 2v9c0 1.125.875 2 2 2a3 3 0 0 0 3 3c1.625 0 3-1.344 3-3h4a3 3 0 0 0 3 3c1.625 0 3-1.344 3-3h1.5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5zM13 4h2.031c.125 0 .281.094.375.188l2.219 2.593a.948.948 0 0 1 .156.219H13V4zM5 15c-1.125 0-2-.875-2-2 0-1.094.875-2 2-2 1.094 0 2 .906 2 2 0 1.125-.906 2-2 2zm10 0c-1.125 0-2-.875-2-2 0-1.094.875-2 2-2 1.094 0 2 .906 2 2 0 1.125-.906 2-2 2zm3-3h-.188A3.01 3.01 0 0 0 15 10a3.02 3.02 0 0 0-2.844 2H7.812A3.01 3.01 0 0 0 5 10a3.02 3.02 0 0 0-2.844 2H2c-.563 0-1-.438-1-1V2c0-.531.438-1 1-1h9c.531 0 1 .469 1 1v7c0 .281.219.5.5.5.25 0 .5-.219.5-.5V8h5v4z"
        fill="#147BD1"
      />
    ),
    viewBox: '0 0 20 16',
  },
  gift: {
    svg: (
      <Path
        d="M14 4h-.031c.375-.469.562-1.094.5-1.781-.094-.719-.531-1.344-1.125-1.75C11.156-1.031 9.094 1.53 8 3.313 6.875 1.53 4.812-1.032 2.625.469 2.031.875 1.594 1.5 1.5 2.219 1.437 2.906 1.625 3.53 2 4 .875 4 0 4.906 0 6v2c0 .563.438 1 1 1v5c0 1.125.875 2 2 2h10c1.094 0 2-.875 2-2V9c.531 0 1-.438 1-1V6c0-1.094-.906-2-2-2zm-2-3c.813 0 1.5.688 1.5 1.5A1.5 1.5 0 0 1 12 4H8.75C9.844 2.187 11.063 1 12 1zM4 1c.906 0 2.125 1.188 3.219 3H4a1.48 1.48 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 1zM1 8V6c0-.531.438-1 1-1h5.5v3H1zm2 7c-.563 0-1-.438-1-1V9h5.5v6H3zm11-1c0 .563-.469 1-1 1H8.5V9H14v5zm1-6H8.5V5H14c.531 0 1 .469 1 1v2z"
        fill="#147BD1"
      />
    ),
    viewBox: '0 0 16 16',
  },
  chevronDown: {
    svg: (
      <Path
        d="M10.875 5.422 6.398 9.71A.633.633 0 0 1 6 9.875a.637.637 0 0 1-.398-.14l-4.5-4.313a.56.56 0 0 1-.024-.797.56.56 0 0 1 .797-.023L6 8.539l4.102-3.937a.56.56 0 0 1 .796.023.56.56 0 0 1-.023.797z"
        fill="#147BD1"
      />
    ),
    viewBox: '0 0 12 12',
  },
  chevronUp: {
    svg: (
      <Path
        d="m1.102 7.602 4.476-4.29c.14-.117.281-.187.422-.187.14 0 .258.047.375.14l4.477 4.29c.234.234.234.586.023.797-.21.234-.563.234-.797.023L6 4.485 1.875 8.421a.56.56 0 0 1-.797-.024c-.21-.234-.21-.585.024-.796z"
        fill="#147BD1"
      />
    ),
    viewBox: '0 0 12 12',
  },
};

export default iconList;
