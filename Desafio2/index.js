import ProductManager from './managers/ProductManager.js';



const dataBaseOfProducts = new ProductManager('./files/products.json');

const env = async () => {
    const obj = await dataBaseOfProducts.getProduct();

    console.log(obj);
    
    const product = {
        title: 'Prueba3',
        description: 'Prueba3',
        price: 200,
        thumbnail: 'Sin Img3',
        code: 55,
        stock: 555
      }
      
      
      
      await dataBaseOfProducts.addProduct(product);
      
      await dataBaseOfProducts.getProduct();
};
env();

    
    
    
    