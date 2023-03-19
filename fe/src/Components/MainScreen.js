import React,{useState,useEffect} from 'react'
import Axios from 'axios';

export default function MainScreen() {

	const [products,setProducts] = useState([{}]);

    async function getProducts(){
    	let response = await Axios.get(`http://localhost:5000/products/`)
   		await setProducts(response.data)
    }

    useEffect(()=>{
    	getProducts();
    },[])
    return (
	<div className='py-5 container d-flex flex-row justify-content-center'>
		<div className="row  d-flex flex-row justify-content-start mx-auto w-100  ">

		{
			products.map((product)=>{
			return	<div key = {product._id} className='product p-4 rounded-3 col-3 m-3 d-flex flex-column align-items-start'>
						<h4 className='mx-auto pb-3'>{product.name}</h4>
						<h6 className='text-primary'>${product.price}</h6>
						<p>{product.description}</p>
						<button className='btn addToCartBtn text-white mx-auto'>Add to Cart</button>
					</div>
			})
		}
		</div>

	</div>
    )
}
