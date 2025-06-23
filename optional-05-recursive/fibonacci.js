function fibonacci(n) {
  if (n <= 0) return [0];
  if (n === 1) return [0, 1].slice(0, n + 1);

  return [
    ...fibonacci(n - 1),
    fibonacci(n - 1)
      .slice(-2)
      .reduce((a, b) => a + b),
  ];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
