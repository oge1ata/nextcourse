'use client'

import Link from "next/link";
import { useRouter } from "next/navigation"




const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'product 1 slayed'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'product 2 slayed'
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'product 4 slayed'
    }
]



export default function ProductList({getAllProducts}){

    const router = useRouter();

    console.log(getAllProducts, 'getAllProducts');
    return <ul>
        {
            getAllProducts && getAllProducts.length ? getAllProducts.map(productItem=> (
            <li onClick={() => router.push(`/products/${productItem.id}`)} key={productItem.id}>{productItem.title}</li>
            
            //ca use Link as well
            // <Link href={`/products/${productItem.id}`}>
            // <li key={productItem.id}>{productItem.name}</li>
            
            // </Link>
            )): <h1>No Product</h1>}
    </ul>
}