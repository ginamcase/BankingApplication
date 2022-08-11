import React from 'react';

function Navbar() {
  return (
    <>
    <nav className="navbar" navbar-expand-med navbar dark >
        <a href="#" className="navbar-title">Gotham National Bank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a href="/Home" className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Navigate to Homepage">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#/deposit/" className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Make a Deposit">Deposit</a>
                </li>
                <li>
                     <a href="/Withdraw" className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Make a Withdrawal">Withdraw</a>
                </li>
                <li>
                     <a href="/Create Account" className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Create a New Account">Create Account</a>
                </li>
                <li>
                     <a href="/Login" className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Log into Your Account">Log In</a>
                </li>
                <li>         
                      <a href="/All Data" className="nav-link" data-toggle="tooltip" data-placement="bottom" title=" View the User List">All Data</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  );
}