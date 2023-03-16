import React,{useState} from 'react'

export default function Home() {
	const [login,setLogin] = useState(true)
	//login -> email,pass
	//signup ->name,email,pass,phoneNum,accType


	return (
		<div className='d-flex flex-column align-items-center m-5'>
			<div className="buttons">
				<button className='btn btn-primary me-3' onClick={()=>setLogin(true)}>Log in</button>
				<button className='btn btn-primary' onClick={()=>setLogin(false)}>Sign up</button>
			</div>

			<form className='mt-4 homepageForm w-50 rounded-3 p-3   '>
				<h5>Welcome</h5>
				<div className=' mt-4 '>
					{!login?	<input type="text" className='w-50 mb-4 ' placeholder='Name'></input>:""}
					{!login?<br/>:""}
					<input type="text" className='w-50 mb-4 ' placeholder='Email'></input>
					<br/>
					<input type="password" className='w-50 mb-4 ' placeholder='Password'></input>
					{!login?<br/>:""}
					{!login?	<input type="text" className='w-50 mb-4 ' placeholder='Phone Number'></input>:""}
					{!login?<br/>:""}
					{!login?	<input type="text" className='w-50 mb-4 ' placeholder='Account Type'></input>:""}
				</div>
			<button className='btn btn-success'>{login?"Log in":"Sign Up"}</button>
			</form>
		</div>
	)
}
