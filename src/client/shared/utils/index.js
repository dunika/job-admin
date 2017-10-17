export const toggleArray(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    return [
      ...array.slice(0, index),
      ...array.slice(index + 1),
    ];
  }
  return [...array, item];
}

export * from './redux'
