import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import T from 'prop-types';
import Notification from './Notification/Notification';
import ContactForm from './ContactForm/ContactFormContainer';
import Filter from './Filter/FilterContainer';
import ContactList from './ContactList/ContactListContainer';
import '../transitions/slide-appear.css';
import popTransition from '../transitions/pop.module.css';
import * as selectors from '../redux/selectors';

const containerStyles = {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 355,
  fontFamily: 'Roboto',
};

const PhoneBook = ({ contacts, notifyText }) => (
  <div style={containerStyles}>
    <CSSTransition in timeout={500} classNames="slide" appear>
      <h2>Phonebook</h2>
    </CSSTransition>

    <TransitionGroup>
      {notifyText && (
        <CSSTransition timeout={250} classNames={popTransition}>
          <Notification text={notifyText} />
        </CSSTransition>
      )}
    </TransitionGroup>

    <ContactForm />

    <h2>Contacts</h2>
    <TransitionGroup>
      {contacts.length > 1 && (
        <CSSTransition timeout={250} classNames={popTransition}>
          <Filter />
        </CSSTransition>
      )}
    </TransitionGroup>

    <ContactList />
  </div>
);

PhoneBook.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      name: T.string.isRequired,
      number: T.string.isRequired,
      id: T.string.isRequired,
    }),
  ).isRequired,
  notifyText: T.string.isRequired,
};

const mapStateToProps = store => ({
  contacts: selectors.getContacts(store),
  notifyText: selectors.getNotifyMessage(store),
});

export default connect(mapStateToProps)(PhoneBook);
