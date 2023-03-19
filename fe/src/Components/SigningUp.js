import React , {useState} from 'react'

function SigningUp() {
	const [accType,setAccType]=useState("buyer")
	const [email,setEmail]=useState("");
	const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


	const handleSubmit=(e)=>{
		e.preventDefault();

		const signupData={
			name:e.target[0].value,
			email:e.target[1].value,
			password:e.target[2].value,
			phoneNum:e.target[3].value,
			accType:accType
		}
		console.log(signupData);
	}

    return (
		<form className='mt-4 homepageForm w-50 rounded-3 p-3 ' onSubmit={handleSubmit}>
				<h5>Welcome</h5>
				<div className=' mt-4 '>
		<input type="text" className='w-50 mb-4 ' placeholder='Name' ></input>
			<br/>
			<input type="text" className='w-50 mb-2 ' onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required></input>
			<br/>
			{(!email.toLowerCase().match(validRegex) && email.length>0 )?<p className='w-50 ms-5 text-danger my-0' >Wrong Email</p >:""}
					<br/>
					<input type="password" className='w-50 mb-4 ' placeholder='Password' ></input>
					<br/>
						<input type="number" className='w-50 mb-4 ' placeholder='Phone Number'></input>
					<br/>
					<p className="ms-5 w-50">Account Type </p >

					<input type="radio" className='mb-4 me-2' name='accType' value="seller" onClick={()=>setAccType("seller")}/>
					<span className='me-3'>Seller</span>
					<input type="radio" className='me-2' name='accType' value="buyer" defaultChecked onClick={()=>setAccType("buyer")}/>
					<span>Buyer</span>
					</div>
			<button className='btn btn-success'>Sign Up</button>
			</form>
    )
}

export default SigningUp