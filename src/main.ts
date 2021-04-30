import {sayHello} from './greet';
import {RequestType, Product, ProductValidation, ProductKey} from './interface/interface';
function showHello(divName: string, name:string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}
showHello('greeting', 'Johnny');

const apiInvoke = async (url: string, method?:RequestType, body?: Product):Promise<Array<Product> | Product | Error> => {
    try {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    } catch(error) {
        if (error) { return new Error(error.message); }
    }
}

const fetchProducts = ():Promise<Array<Product> | Error> => {
    const url = 'https://fakestoreapi.com/products';
    const result = apiInvoke(url) as Promise<Array<Product> | Error>;
    return result;
}

function getProduct(id:number):Promise<Product | Error> {
    const url = `https://fakestoreapi.com/products/${id}`;
    const result =  apiInvoke(url) as Promise<Product>;
    return result;
}

const productRules = {
    id: (v:FormDataEntryValue) => v.toString() !== '' && !Number.isNaN(Number(v)),
    title: (v:FormDataEntryValue) => v.toString() !== '' && v.toString().length < 150,
    price: (v:FormDataEntryValue) => v.toString() !== '' && !Number.isNaN(Number(v.toString())) && Number(v.toString()) > 0,
    category: (v:FormDataEntryValue) => v.toString() !== '' && v.toString().length < 100,
    description: (v:FormDataEntryValue) => v.toString() !== '' && v.toString().length < 5000,
    image: (v:FormDataEntryValue) => v.toString() !== '' && (v as File).size < 1048576, 
}

function isFormDataValid(formData:FormData):boolean {
    const productValidation:ProductValidation = {};
    try {
        formData.forEach((v, k:ProductKey) => {
            productValidation[k] = productRules[k](v);
           
        })
    } catch (e) {
        return false;
    }
    return Object.keys(productValidation).filter(v => !v).length <= 0
}

function extractFormData(formData:FormData):Product {
    const product:Product = {};
    try {
        formData.forEach((v, k:ProductKey) => {
            if (k === 'price' || k === 'id') {
                product[k] = Number(v.toString());
            } else {
                product[k] = v.toString();
            }
        })
    } catch(e) {}
    return product;
}

function insertProduct(product:Product):Promise<Product | Error> {
    const url = 'https://fakestoreapi.com/products';
    const result = apiInvoke(url, 'POST', product) as Promise<Product | Error>;
    return result;
}

function updateProduct(product:Product):Promise<Product | Error> {
    const url = `https://fakestoreapi.com/products/${product.id}`;
    const result = apiInvoke(url, 'PUT', product) as Promise<Product | Error>;
    return result;
}

function deleteProduct(id:number):Promise<Product | Error> {
    const url = `https://fakestoreapi.com/products/${id}`;
    const result = apiInvoke(url, 'DELETE') as Promise<Product | Error>;
    return result;
}

(function() {
    fetchProducts().then(data => {
        if (data instanceof Error) {
            console.log(data.message);
        }else if (Array.isArray(data)) {
            console.log(data);
        }
    });
    
    const productForm = document.getElementById('productForm') as HTMLFormElement;
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const formData = new FormData(document.querySelector('form'));
        console.log(isFormDataValid(formData));
        const product =  isFormDataValid(formData) ? extractFormData(formData) : null;
        if (product) {
            insertProduct(product);
        }
    })
})()