import ProductManager from './managers/ProductManager.js';

const dataBaseOfProducts = new ProductManager('./files/products.json');

const env = async () => {
    const objs = await dataBaseOfProducts.getProduct();

    console.log(objs);

    const product = {
        title: 'Prueba4',
        description: 'Prueba4',
        price: 400,
        thumbnail: 'Sin Img4',
        code: 'asd123',
        stock: 444
      };
      
      await dataBaseOfProducts.addProduct(product);
      
      const obtsResult = await dataBaseOfProducts.getProduct();
      console.log(obtsResult);
      
    };

env();