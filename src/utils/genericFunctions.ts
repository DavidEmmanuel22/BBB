import {ExtraAttributes} from '../models/Objects/ProductByCategory';

export const GetAttribute = (
  attributes: Array<ExtraAttributes>,
  name: string,
) => {
  const filter = attributes.filter(b => b.attribute_code === name);
  if (filter.length > 0) {
    return filter[0].value;
  } else {
    return null;
  }
};
