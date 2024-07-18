import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <header>
            <div className="navbar-section">
             <Link to={'/'} className="logo">E-Commerce</Link>
             <div className="search-bar">
             <input type="text" placeholder='Search product'/>
             </div>
             <Link to={'/cart'} className="cart">Cart</Link>
            </div>

            <div className="navbar-section2">
                <div className="items">Filter by</div>
                <div className="items">No Filter</div>
                <div className="items">Mobile</div>
                <div className="items">Laptops</div>
                <div className="items">Tablets</div>
                <div className="items">{">"}29999</div>
                <div className="items">{">"}49999</div>
                <div className="items">{">"}69999</div>
                <div className="items">{">"}89999</div>
              
            </div>
        </header>
    </div>
  )
}

export default Navbar       