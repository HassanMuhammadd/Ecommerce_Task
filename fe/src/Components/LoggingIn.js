import React, {useState} from 'react'

function LoggingIn() {
	const [email,setEmail]=useState("");
	const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


	const handleSubmit=(e)=>{
			e.preventDefault();

			const signupData={
				email:e.target[0].value,
				password:e.target[1].value,
			}
			console.log(signupData);
		}

    return (
		<form className='mt-4 homepageForm w-50 rounded-3 p-3 ' onSubmit={handleSubmit}>
			<h5>Welcome</h5>
			<div className=' mt-4 '>
		<input type="text" className='w-50 mb-2 ' onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required></input>
			<br/>
			{(!email.toLowerCase().match(validRegex) && email.length>0 )?<p className='w-50 ms-5 text-danger my-0' >Wrong Email</p >:""}
			<br/>
			<input type="password" className='w-50 mb-4 ' placeholder='Password' required></input>
			</div>
			<button className='btn btn-success'>Log In</button>
			</form>
    )
}

export default LoggingIn