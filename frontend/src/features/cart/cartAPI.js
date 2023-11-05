export function fetchCount(amount = 1) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3001")
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
