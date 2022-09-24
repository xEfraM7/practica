import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    //pido datos
    const response = await fetch(urlApi);
    //los transformo a json
    const data = await response.json();
    //retorno todos los datos
    return data;
}

//funcion de solicitudes

const anotherFunction = async (urlApi) => {

    try{
        //llamamos todos los productos
        const products = await fetchData(`${urlApi}/products`);
        //llamamos un solo producto en este caso el primero de la lista
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        //llamamos la categoria del producto anterior
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        //consultamos en consola
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }catch(error){
        console.error(error);
    }

}

anotherFunction(API);