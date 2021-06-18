export function fetchCount(amount = 1) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve({ data: 2 }), 500)
  );
}
export function fetchCountError(amount = 1) {
  return new Promise((resolve, reject) => {
    throw new Error('errrrror');
  });
}
