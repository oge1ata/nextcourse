
// import ProductList from "@/components/product-list";
// this is a dynamic route, renders this page slash anything

//params elps us to get the id

async function fetchProductDetails(id){
    const response = await fetch (`https://dummyjson.com/products/${id}`, {
        method: 'GET',
        // next : {
        //     revalidate : 0 //revalidates every time there's a change
        // }
    })

    const result = await response.json();

    return result;
}

export default async function ProductDetails({params}){

    // console.log(params)

    const {productdetails} = params
    const getCurrentProductDetails = await fetchProductDetails(productdetails)
    
    console.log(getCurrentProductDetails);
    return <div>
        <h1>{getCurrentProductDetails?.title}</h1>
        <p>{getCurrentProductDetails?.description}</p>
        <p>{getCurrentProductDetails?.price}</p>

    </div>

}