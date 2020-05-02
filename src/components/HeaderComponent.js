import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render () {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="col">
                            <h1>NuCamp
                                <h2>a better way to camp</h2>
                            </h1>
                        </div>
                    </div>
                </Jumbotron>
                <navbar dark sticky="top">
                    <div className="container">
                        <navbarBrand href="/">NuCamp</navbarBrand>
                    </div>
                </navbar>
            </React.Fragment>
        );
    }
}

export default Header;