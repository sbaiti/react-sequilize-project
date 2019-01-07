import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


const TabUsers = ( props ) => {
    return (
        <div className="table__users">
            <BootstrapTable data={props.data} striped hover>
                <TableHeaderColumn isKey dataField='id'>User ID</TableHeaderColumn>
                <TableHeaderColumn dataField='firstName'>User First Name</TableHeaderColumn>
                <TableHeaderColumn dataField='lastName'>User Last Price</TableHeaderColumn>
                <TableHeaderColumn dataField='age'>User Age</TableHeaderColumn>
                <TableHeaderColumn dataField='job'>User Job</TableHeaderColumn>
                <TableHeaderColumn dataField='telephone'>User Telephone</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}



export default TabUsers;