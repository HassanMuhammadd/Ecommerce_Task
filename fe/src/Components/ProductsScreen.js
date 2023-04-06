import React , {useState , useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import Navbar from './Navbar';
import axios from 'axios';


export default function ProductsScreen({userData,products}) {
	const [itemOffset, setItemOffset] = useState(0);
	const [currentItems,setCurrentItems] =useState([{}]);
	const [pageCount,setPageCount] =useState(0);
	const itemsPerPage = 6;

	useEffect(()=>{
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(products.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(products.length / itemsPerPage));

	},[itemOffset,itemsPerPage,products])

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % products.length;
		setItemOffset(newOffset);
	};

	const addToCart = async(product)=>{
		console.log(product._id);
		console.log(userData._id);
	}

    return (
	<div>

		<Navbar name={userData.name}/>
	<div className="container py-5">
			<div className='py-5 container d-flex flex-row justify-content-center'>
				<div className="row  justify-content-center w-100">

				{
					currentItems.map((product)=>{
						return	<div key = {product.name} className='product p-4 rounded-3 col-3 m-3  d-flex flex-column align-items-start'>
								<h4 className='mx-auto pb-3'>{product.name}</h4>
								<h6 className='text-primary'>${product.price}</h6>
								<p>{product.description}</p>
								<button className='btn addToCartBtn text-white mx-auto' onClick={()=>addToCart(product)}>Add to Cart</button>
							</div>
					})
				}

				</div>
				</div>
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
					marginPagesDisplayed={2}
					containerClassName="pagination justify-content-center"
					pageClassName="page-item"
					pageLinkClassName="page-link"
					previousClassName="page-item"
					previousLinkClassName="page-link"
					nextClassName="page-item"
					nextLinkClassName="page-link"
					activeClassName="active"
					/>
	</div>
	</div>
    )
}
