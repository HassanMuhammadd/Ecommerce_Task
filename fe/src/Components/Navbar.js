import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar({name}) {
	const handleLogOut = ()=>{
		window.sessionStorage.clear();
		window.location.href='./';
	}
    return (
	<div>
		<nav className="navbar navbar-expand-lg bg-primary ">
			<div className="container-fluid">
				<Link className="navbar-brand ms-3 fw-bold" href="#">{name}</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ">
					<Link className="nav-link mx-2 text-white" to="/Products">Products</Link>
					<Link className="nav-link mx-2 text-white" to="/Cart">Cart</Link>
				</div>
				<button className='ms-auto me-5 btn btn-danger' onClick={handleLogOut}>Log Out</button>
				</div>
			</div>
		</nav>
	</div>
    )
}
