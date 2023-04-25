import fs from 'fs';

const path = '../files/products.json'

export default class ProductManager{
  
  constructor (){
      this.path = path;
  };

  getProduct = async () =>{
    try {      
      if (fs.existsSync(this.path)){
        const data = await fs.promises.readFile(this.path, 'utf-8')        
        const dataJSON = JSON.parse(data);  
        return dataJSON;
      }else{
        return [];
      }  
    } catch (error) {
      console.log(error);
    }      
  };


  addProduct = async (product)=>{
    try {
      const products = await this.getProduct();
   
      if (products.length === 0){
        product.id = 1;
      }else{
        product.id = products[products.length - 1].id +1;
      }

      products.push(product);

      await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

      return product;

    } catch (error) {
      console.log(error);
    }
  };
  
  getProductByld = async (id) =>{
    try {
      const products = await this.getProduct();
      const checkProduct = products.findIndex(product => product.id === id);
    if (checkProduct === -1){
      console.log('El producto no existe')
    }else{
      const check = products[checkProduct]       
        return check;   
    }
    } catch (error) {
      console.log(error);
    }

  };
    
  updateProduct = async (id,newPrice) =>{

    const products = this.getProduct();
    const checkProduct = products.findIndex(product => product.id === id);

    const changePrice= products[checkProduct].price;

    if (changePrice === newPrice){
      console.log('El precio es igual al ingresado');
    }else{
      products[checkProduct].price = newPrice;
      return;
    };

  };
  
  deleteProduct = async (id) => {
    const products = this.getProduct();    
    delete products.id;
  };

};