import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import ProductsScreen from './ProductsScreen';

export default function MainScreen() {

	const [products,setProducts] = useState([{}]);
	const [userData,setUserData] = useState("");

    async function getProducts(){
    	let response = await Axios.get(`http://localhost:5000/products/`)
   		await setProducts(response.data)
    }
	async function getUserFromToken(){
		await fetch("http://localhost:5000/users/verify", {
			method: "POST",
			crossDomain: true,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				token: window.sessionStorage.getItem("token"),
			}),
			})
			.then((res) => res.json())
			.then((data) => {
				setUserData(data.data);
			});
		}

    useEffect(()=>{
    	getProducts();
		getUserFromToken();
    },[])

	const redirect = ()=>{
		window.location.href='./';
	}

    return (
		<div>
		{userData.length===0?<h5 className='my-5'>You must be logged in to view this page.</h5>:<ProductsScreen userData={userData} products={products}/>}
		{userData.length===0?<button className='btn btn-info text-white' onClick={redirect}>Redirect to login Page</button>:""}
		</div>

    )

}
