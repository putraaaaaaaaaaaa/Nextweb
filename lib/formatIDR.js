// utils/formatIDR.js
export const formatIDR = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    currencyDisplay: 'code', // Display the currency code instead of the symbol
  }).format(value).replace('IDR', 'Rp'); // Replace the currency code with 'Rp'
};