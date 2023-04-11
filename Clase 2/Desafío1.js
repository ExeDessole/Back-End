class ProductManager{
    
  constructor (){
    this.path = [];
  };

  getProduct = () =>{
    return this.path;
  };

  addProduct = (title, description, price, thumbnail, code, stock) =>{
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
      product.id = this.path [this.path.length - 1].id +1;
    }
    this.path.push(product);
  };

  getProductByld = (id) =>{

    const checkProduct = this.path.findIndex(product => product.id === id);
    if (checkProduct === -1){
      console.log('El producto no existe');
    }else{
      console.log(this.path[checkProduct]);  
    };

  };
  
  updateProduct = (id,newPrice) =>{

    const checkProduct = this.path.findIndex(product => product.id === id);
    if (checkProduct === -1){
      console.log('El producto no existe');
    }else{
      console.log(this.path[checkProduct]);  
    };

    const changePrice= this.path[checkProduct].price;

    if (changePrice === newPrice){
      console.log('El precio es igual al ingresado');
    }else{
      this.path[checkProduct].price = newPrice;
      return;
    };

  };

  deleteProduct = (id) =>{
    const checkProduct = this.path.findIndex(product => product.id === id);
    if (checkProduct === -1){
      console.log('El producto no existe');
    }else{
      delete this.path[checkProduct];
      console.log('El producto ha sido eliminado');
    };
  }

}

const dataBaseOfProducts = new ProductManager();

dataBaseOfProducts.addProduct('Producto de prueba', 'Este es un producto de prueba', 200, 'Sin imagen' , 'abc123' , 25);

dataBaseOfProducts.addProduct('Prod. de prueba2', 'Producto de prueba', 100, 'S. Img' , 'abc456' , 50);

dataBaseOfProducts.addProduct('Prod. de prueba2', 'Producto de prueba', 100, 'S. Img' , 'abc456' , 50);

dataBaseOfProducts.addProduct('Prod. de prueba2', 'Producto de prueba', 100, 'S. Img' , 'abc456' , 50);


console.log(dataBaseOfProducts.deleteProduct(2));



