import React,{useState,useEffect} from 'react'
import Axios from 'axios';

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
				token: window.localStorage.getItem("token"),
			}),
			})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "userData");
				setUserData(data.data);
			});
		}

    useEffect(()=>{
    	getProducts();
		getUserFromToken();

    },[])
    return (
		<div className="container py-5">
			<h5>Hello, {userData.name}!</h5>
			<div className='py-5 container d-flex flex-row justify-content-center'>
				<div className="row  d-flex flex-row justify-content-start mx-auto w-100  ">

				{
					products.map((product)=>{
						return	<div key = {product.name} className='product p-4 rounded-3 col-3 m-3 d-flex flex-column align-items-start'>
								<h4 className='mx-auto pb-3'>{product.name}</h4>
								<h6 className='text-primary'>${product.price}</h6>
								<p>{product.description}</p>
								<button className='btn addToCartBtn text-white mx-auto'>Add to Cart</button>
							</div>
					})
				}
				</div>

				</div>
	</div>
    )
}
