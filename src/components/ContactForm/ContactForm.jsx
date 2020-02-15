import React, { Component } from 'react';
import T from 'prop-types';
import uuidv4 from 'uuid/v4';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    contacts: T.arrayOf(
      T.shape({
        name: T.string.isRequired,
        number: T.string.isRequired,
        id: T.string.isRequired,
      }).isRequired,
    ).isRequired,
    onAddContact: T.func.isRequired,
    showNotifyWithMessage: T.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onAddContact, showNotifyWithMessage } = this.props;

    const existedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    let message;

    if (existedContact) {
      message = `${name} is already in contacts`;
      showNotifyWithMessage(message);
      setTimeout(() => showNotifyWithMessage(''), 2500);
    } else if (name && number) {
      onAddContact({
        name,
        number,
        id: uuidv4(),
      });
    } else {
      message = 'Please fill the empty fields';
      showNotifyWithMessage(message);
      setTimeout(() => showNotifyWithMessage(''), 2500);
    }

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
          <input
            id="name"
            value={name}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <label htmlFor="number" className={styles.label}>
          Number
          <input
            id="number"
            type="tel"
            pattern="[0-9]{10}"
            value={number}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
