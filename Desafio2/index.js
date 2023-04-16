import ProductManager from './managers/ProductManager.js';

const dataBaseOfProducts = new ProductManager('./files/products.json');

const env = async () => {
    const objs = await dataBaseOfProducts.getProduct();

    console.log(objs);

    const product = {
        title: 'Prueba3',
        description: 'Prueba3',
        price: 200,
        thumbnail: 'Sin Img3',
        code: 'asd123',
        stock: 555
      };
      
      await dataBaseOfProducts.addProduct(product);
      
      const obtsResult = await dataBaseOfProducts.getProduct();
      console.log(obtsResult);
      
    };

env();