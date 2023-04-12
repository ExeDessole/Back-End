import fs from 'fs';
const path = './products.json';

fs.readFile(path, 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        try {
            const dataJSON = JSON.parse(data)
            console.log(dataJSON);            
        } catch (error) {
            console.log(error);
            
        }
    }
});

