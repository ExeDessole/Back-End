import fs from 'fs';

export default class ProductManager{
  
  constructor (path){
      this.path = path;
  };

  getProduct = async() =>{
    try {      
      if (fs.existsSync(path)){
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
  
  addProduct = async (title, description, price, thumbnail, code, stock)=>{
    try {
      const products = await this.getProduct();
      const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: []
      };
      if (this.path.length === 0){
        product.id = 1;
      }else{
        product.id = this.path[this.path.length - 1].id +1;
      }
      path.push(product)
      await fs.promises.writeFile(this.path, JSON.stringify(product, null, '\t'));
    } catch (error) {
      console.log(error);
    }  
  }
  
  // getProductByld = (id) =>{

  //   const checkProduct = this.path.findIndex(product => product.id === id);
  //   if (checkProduct === -1){
  //     console.log('El producto no existe');
  //   }else{
  //     console.log(this.path[checkProduct]);  
  //   };

  // };
    
  //   updateProduct = (id,newPrice) =>{
  
  //     const checkProduct = this.path.findIndex(product => product.id === id);
  //     if (checkProduct === -1){
  //       console.log('El producto no existe');
  //     }else{
  //       console.log(this.path[checkProduct]);  
  //     };
  
  //     const changePrice= this.path[checkProduct].price;
  
  //     if (changePrice === newPrice){
  //       console.log('El precio es igual al ingresado');
  //     }else{
  //       this.path[checkProduct].price = newPrice;
  //       return;
  //     };
  
  //   };
  
  //   deleteProduct = (id) =>{
  //     const checkProduct = this.path.findIndex(product => product.id === id);
  //     if (checkProduct === -1){
  //       console.log('El producto no existe');
  //     }else{
  //       delete this.path[checkProduct];
  //       console.log('El producto ha sido eliminado');
  //     };
  //   }
  
  // };
  
}