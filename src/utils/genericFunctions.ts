import { ExtraAttributes } from '../models/Objects/ProductByCategory';

export const GetAttribute = (attributes: Array<ExtraAttributes>, name: string) => {
  const filter = attributes.filter((b) => b.attribute_code === name);
  if (filter.length > 0) {
    return filter[0].value;
  } else {
    return null;
  }
};

export const sortNumberByKey = (list: any[], key: string) => list.sort((a, b) => (a[key] > b[key] ? 1 : -1));

export const formatMoney = (value = 0, hasCurrency = true, currency = 'MXN') =>
  `$${Number(value)
    .toFixed(2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}${hasCurrency ? ' ' + currency : ''}`;

export const formatImage = (uri = '') => {
  return uri.replace('http://', 'https://');
};

export const formatDescription = (string = '') => {
  var regex = /(<([^>]+)>)/gi,
    result = string.replace(regex, '\n');

  console.log(result);
  return result;
};
