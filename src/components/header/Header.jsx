import React from 'react';
import {
    Navbar,
    NavLink,
    Nav,
    NavItem,
    Collapse,
    NavbarToggler
} from 'reactstrap';
import './header.css';


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <div className="site-logo">
                        <a href="/home" title="it-beaum" rel="home">
                            <img src={require('../../assets/logo-type-x1.png')} alt='it__beam' />
                        </a>
                    </div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="mx-5 ">
                        <Nav className="ml-auto" navbar>
                            <NavItem className="navItem mx-2">
                                <NavLink href="users">
                                    Users
                    </NavLink>
                            </NavItem>
                            <NavItem className="navItem mx-2">
                                <NavLink href="/register">
                                    Register
                    </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        );
    }


}
export default Header;