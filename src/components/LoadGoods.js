
// GET request using fetch with async/await
const response = await fetch('https://fakestoreapi.com/products');
const data = await response.json();
export { data }