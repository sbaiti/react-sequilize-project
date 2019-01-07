import React from 'react';
import { schema, UISchema } from './data/data';
import Form from "react-jsonschema-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Greet } from '../../utils/util';
import 'react-toastify/dist/ReactToastify.min.css'
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
        const user = formData;
        axios.post("http://localhost:8080/register", { ...user }).then(res => {
            console.log('success', res);
            toast.success(<Greet name={formData.firstName} type={true} />);
        }).catch(function (error) {
            console.log(error);
            toast.error(<Greet name={formData.firstName} type={false} />);
        });;
    }


    render() {
        return (
            <div className='form'>
                <Form
                    schema={schema}
                    uiSchema={this.state.UISchema}
                    onSubmit={this.onSubmit} />
                <ToastContainer />
            </div>
        );
    }
}

export default FormR;