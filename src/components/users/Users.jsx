import React from 'react';
import Header from '../header/Header';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './users.css';




class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    getUsers = () => {

    }

    render() {
        axios.get('http://localhost:8080/findUser').then((users) => {
            this.setState({ users: users.data })
        }).catch((error) => console.log('error', error));
        return (
            <div className="users">
                <Header />
                <div className="table__users">
                    <BootstrapTable data={this.state.users} striped hover>
                        <TableHeaderColumn isKey dataField='id'>User ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='firstName'>User First Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='lastName'>User Last Price</TableHeaderColumn>
                        <TableHeaderColumn dataField='age'>User Age</TableHeaderColumn>
                        <TableHeaderColumn dataField='job'>User Job</TableHeaderColumn>
                        <TableHeaderColumn dataField='telephone'>User Telephone</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }
}


export default Users;




