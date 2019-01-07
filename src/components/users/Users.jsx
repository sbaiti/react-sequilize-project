import React from 'react';
import Header from '../header/Header';
import Search from './search/Search';
import './users.css';




class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    render() {
       
        return (
            <div className="users">
                <Header />
                <Search />
            </div>
        );
    }
}


export default Users;




