import { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Form extends Component {

    state = {
        name: '',
        number: ''
    }
    
    nameId = nanoid();
    numberId = nanoid();

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit({name, number});
        this.setState({
          name: '',
          number: ''
        })
    }

    render() {
        const { nameId, numberId, handleChange, handleSubmit } = this;
        const { name, number } = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        id={nameId}
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    <p>Number</p>
                    <input
                        type="tel"
                        name="number"
                        id={numberId}
                        value={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}