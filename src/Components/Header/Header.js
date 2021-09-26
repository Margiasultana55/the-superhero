import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='container'>

                <h1>An  Important <span> Event  for  Charity</span></h1>
                <p>Give a hand to make a better World</p>
                <div className='funds'>
                    <p><span>467</span><br /> Voulunteers are available</p>
                    <p><span>$4900</span><br /> Funds raise by people</p>
                </div>

            </div>
            <div className='navber'>
                <nav><a href="/shop">Home</a>
                    <a href="/order">About Us</a>
                    <a href="/manage">Contact</a></nav>
            </div>
        </div>
    );
};

export default Header;