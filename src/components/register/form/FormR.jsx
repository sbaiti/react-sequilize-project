import React from 'react';
import { schema, UISchema } from './data/data';
import Form from "react-jsonschema-form";
import axios from "axios";
import './FormR.css';




class FormR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schema,
            UISchema,
            formData: null
        }
    }
    onSubmit = ({ formData }) => {
        console.log("Data submitted: ", formData);
        this.setState({ formData });
        const user = this.state.formData;
            axios.post("/register", { user }).then(res => {
                console.log('success', res);
            });
    }


    render() {
        return (
            <div className='form'>
                <Form
                    schema={schema}
                    uiSchema={this.state.UISchema}
                    onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default FormR;