import * as React from 'react';

export const currency = (value: string) => {
  // let value = event.target.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{3})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ',');

  // event.currentTarget.value = value;
  return value;
};
