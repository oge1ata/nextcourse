
import ProductList from "../../components/product-list";

//create a method

async function fetchAllProducts(){
    const response = await fetch ('https://dummyjson.com/products', {
        method: 'GET',
        // cache: 'no-store' //doesn't store any kind of cache

    })

    const result = await response.json();

    if (result && result.products && result.products.length) 
        return result.products;
}

export default async function Products(){
    const getAllProducts = await fetchAllProducts()

    console.log('=======================')
    console.log(getAllProducts);
    console.log('=======================')

return <ProductList getAllProducts = {getAllProducts}/>
}