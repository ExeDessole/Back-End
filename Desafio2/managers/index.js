import ProductManager from '../managers/ProductManager.js';

const path = '../files/products.json';

const dataBaseOfProducts = new ProductManager(path);

await dataBaseOfProducts.addProduct('Producto de prueba', 'Este es un producto de prueba', 200, 'Sin imagen' , 'abc123' , 25);
await dataBaseOfProducts.getProduct();
  
await dataBaseOfProducts.addProduct('Prod. de prueba2', 'Producto de prueba', 100, 'S. Img' , 'abc456' , 50);
await dataBaseOfProducts.getProduct();

await dataBaseOfProducts.getProductByld(2);

await dataBaseOfProducts.updateProduct(2,1500);

await dataBaseOfProducts.getProduct();
await dataBaseOfProducts.deleteProduct(1);
