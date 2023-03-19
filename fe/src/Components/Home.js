import React,{useState} from 'react'
import LoggingIn from './LoggingIn.js'
import SigningUp from './SigningUp.js'
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

					{login?<LoggingIn/>:<SigningUp />}

		</div>
	)
}
