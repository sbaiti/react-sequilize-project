import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import axios from 'axios';
import './search.css';




class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersFind: null,
            name: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        const user = this.state.name;
        axios.get('http://localhost:8080/search', {
            params: {
                user: user
            }}).then(res =>
                console.log('success')
            );
        // axios({
        //     url: 'http://localhost:8080/search',
        //     method: 'get',
        //     data: {
        //         user: user
        //     }
        // }).then(res =>
        //     console.log('success',res)
        // )
    }

    render() {
        return (

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
                        <Button color="success" onClick={this.onSubmit}>Search!</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>

        );
    }


}

export default Search;