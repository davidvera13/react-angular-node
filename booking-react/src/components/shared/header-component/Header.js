/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import RentalSearch from "./RentalSearch";


const Header = ({ username, isAuth, logout }) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Booking</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">&nbsp;</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <RentalSearch />
                <ul className="navbar-nav ml-auto">
                    { isAuth &&
                        <li className="nav-item">
                            <div className="nav-link">Hi, { username }</div>
                        </li>
                    }
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    { isAuth &&
                        <>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"
                                   id="navbarDropdown"
                                   href="#"
                                   role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    Manage
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link
                                        className="dropdown-item"
                                        to="/rentals/new">
                                        New Rental
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div
                                    onClick={logout}
                                    className="nav-link" >Logout</div>
                            </li>
                        </>

                    }
                    { !isAuth &&
                        <React.Fragment>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </React.Fragment>
                    }
                </ul>

            </div>
        </nav>
    )
}

const mapStateToProps = ({auth: { username, isAuth}}) => {
    return { username, isAuth }
}

export default connect(mapStateToProps)(Header);
