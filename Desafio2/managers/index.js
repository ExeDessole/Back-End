import ProductManager from '../managers/ProductManager.js';

const path = '../files/products.json';

const dataBaseOfProducts = new ProductManager(path);
await dataBaseOfProducts.addProduct('Producto de prueba', 'Este es un producto de prueba', 200, 'Sin imagen' , 'abc123' , 25);
  
await dataBaseOfProducts.addProduct('Prod. de prueba2', 'Producto de prueba', 100, 'S. Img' , 'abc456' , 50);

// const env = async () =>{
//   const products = await dataBaseOfProducts.getProduct();
//   console.log(products);
  
//   await dataBaseOfProducts.createProduct('Producto nuevo', 'Sin descripcion', 300, 'Sin Imagen', 'abc123', 50);

//   products = await dataBaseOfProducts.getProduct();
//   console.log(products);
  
// };

// env();
await dataBaseOfProducts.getProduct();
