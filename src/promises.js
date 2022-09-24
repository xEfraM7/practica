
//importamos la libreria del node para trabajar con fetch
import fetch from "node-fetch";


//declaramos el link de la api
const API = 'https://api.escuelajs.co/api/v1/';

//funcion para el fetch
const fetchData = (urlApi) => {
    return fetch(urlApi);
};

// fetchData(`${API}products`)
// //el response no lleva llaves da undefined
// .then(response => response.json())
// .then(products => {
//     console.log(products);
// })
// .catch(error => {
//     console.log(error);
// })


fetchData(`${API}products`)
.then(response => response.json())
.then(products => {
    console.log(products);
    return fetchData(`${API}products/${products[0].id}`);
})
.then(response=>response.json())
.then(product=>{
    console.log(product.title);
    return fetchData(`${API}categories/${product.category.id}`);
})
.then(response=>response.json())
.then(category=>{
    console.log(category.name);
    return fetchData(`${API}categories/${category.name}`);
})
.catch(error => console.log(error))
.finally(()=>{
    console.log('todo listo');
})



