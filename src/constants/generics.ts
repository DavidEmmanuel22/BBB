export const ReviewTitleQualification = (title = ''): string => {
  switch (title) {
    case 'Quality':
      return 'De acuerdo con su calidad';
    case 'Price':
      return 'Con su respectivo precio';
    case 'Value':
      return 'Por el valor que aporta';
    default:
      return 'Calidad';
  }
};

export const CartGuestToken = 'cartGuestToken';
export const CartToken = 'cartToken';
