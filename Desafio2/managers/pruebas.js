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
    
    products.push(product)
    
    await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
    
    } catch (error) {
    
    console.log(error);
    
    }
    
    }