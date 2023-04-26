import fs from 'fs';

const path = '../files/carts.json'

export default class CartManager{
  
  constructor (){
      this.path = path;
  };

  getCart = async () =>{
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

  addCart = async (cart) => {
    try {
      const carts = await this.getCart();
    
      if (carts.length === 0){
        carts.id = 1;
      }else{
        carts.id = carts[carts.length - 1].id +1;
      }
      
      this.path.push(cart);
      await fs.promises.writeFile(this.path, JSON.stringify(carts, null, '\t'));
      return cart;
    } catch (error) {
      console.log(error);
    }

  };

  getCartByld = async (id) =>{
    try {
      const carts = await this.getCart();
      const checkCart = carts.findIndex(carts => carts.id === id);
    if (checkCart === -1){
      console.log('El carrito no existe')
    }else{
      const check = carts[checkCart]       
        return check;   
    }
    } catch (error) {
      console.log(error);
    }

  };

};
  

    
//   updateProduct = async (id,newPrice) =>{

//     const products = this.getProduct();
//     const checkProduct = products.findIndex(product => product.id === id);

//     const changePrice= products[checkProduct].price;

//     if (changePrice === newPrice){
//       console.log('El precio es igual al ingresado');
//     }else{
//       products[checkProduct].price = newPrice;
//       return;
//     };

//   };
  
//   deleteProduct = async (id) => {
//     const products = this.getProduct();    
//     delete products.id;
//   };