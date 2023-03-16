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
	<div>
		{

		}

	</div>
    )
}
