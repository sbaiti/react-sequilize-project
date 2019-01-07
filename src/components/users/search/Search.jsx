import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import axios from 'axios';
import TabUsers from '../tabusers/TabUsers';
import './search.css';




class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersFind: null,
            name: ''
        }
    }
    searchOne = (e) => {
        e.preventDefault();
        const user = this.state.name;
        axios.get(`http://localhost:8080/search/?user=${user}`).then(res => {
            console.log('success', res);
            this.setState({ usersFind: res.data });
        }
        ).catch((error) => console.log('error', error));
    }
    
    searchAll = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8080/users').then((res) => {
            this.setState({ usersFind: res.data  })
        }).catch((error) => console.log('error', error));
    }

    render() {
        return (
            <div>
                <div className="search">
                    <InputGroup>
                        <Input
                            type="text"
                            name="text"
                            placeholder="User"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                        <InputGroupAddon addonType="append">
                            <Button color="success" onClick={this.searchOne}>Search!</Button>
                        </InputGroupAddon>
                        <InputGroupAddon addonType="append">
                            <Button color="primary" onClick={this.searchAll}>Search All</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div>
                    <TabUsers data={this.state.usersFind} />
                </div>
            </div>
        );
    }


}

export default Search;