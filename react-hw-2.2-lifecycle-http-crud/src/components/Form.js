import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default class Form extends React.Component {
    state = {text: ''};

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newNote(nanoid(), this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <label className='InputLabel'>New note</label>
                <div className='TextWrapper'>
                    <textarea className='InputText' name='text' onChange={this.handleChange} value={this.state.text}></textarea>
                    <button className='AddBtn'>+</button>
                </div>
            </form>
        )
    }
}

Form.propTypes = {
    newNote: PropTypes.func.isRequired,
}