const sorts = {};

const radixExport = require('./radix_sort');
const mergeExport = require('./merge_sort');

sorts.radixSort = radixExport;
sorts.mergeSort = mergeExport;
