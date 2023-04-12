import fs from 'fs';

export default class ProductManager{
  
  constructor (path){
      this.path = path;
  };

  getProduct = async() =>{
    try {      
      if (fs.existsSync(this.path)){
        const data = await fs.promises.readFile(this.path, 'utf-8')        
        const dataJSON = await JSON.parse(data);  
        return dataJSON;
      }else{
        return [];
      }  
    } catch (error) {
      console.log(error);
    }      
  };
  
  // addProduct = async (title, description, price, thumbnail, code, stock)=>{
  //   try {
  //     const products = await this.getProduct();
  //     const product = {
  //       title,
  //       description,
  //       price,
  //       thumbnail,
  //       code,
  //       stock,
  //       id: []
  //     };
  //     if (products.length === 0){
  //       product.id = 1;
  //     }else{
  //       product.id = products[products.length - 1].id +1;
  //     }
  //     products.push(product);
  //     await fs.promises.appendFile(this.path, JSON.stringify(product, null, '\t'));
  //   } catch (error) {
  //     console.log(error);
  //   } 

  // };
  
  // getProductByld = (id) =>{
  //   try {
  //     const products = this.getProduct();
  //     const checkProduct = products.findIndex(product => product.id === id);
  //   if (checkProduct === -1){
  //     console.log('El producto no existe')
  //   }else{
  //     const check = products[checkProduct]       
  //       return check;   
  //   }
  //   } catch (error) {
  //     console.log(error);
  //   }

  // };
    
  // updateProduct = (id,newPrice) =>{

  //   const products = this.getProduct();
  //   const checkProduct = products.findIndex(product => product.id === id);

  //   const changePrice= products[checkProduct].price;

  //   if (changePrice === newPrice){
  //     console.log('El precio es igual al ingresado');
  //   }else{
  //     products[checkProduct].price = newPrice;
  //     return;
  //   };

  // };
  
  // deleteProduct = (id) =>{
  //   const products = this.getProduct();
  //   const checkProduct = products.findIndex(product => product.id === id);
    
  //   if (checkProduct === -1){
  //     console.log('El producto no existe');
  //   }else{
  //     delete products[checkProduct];
  //     console.log('El producto ha sido eliminado');
  //   }

  // };
  
};
