import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import * as actions from '../../redux/actions';
import ContactForm from './ContactForm';

const mapStateToProps = store => ({
  contacts: selectors.getContacts(store),
});

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(actions.addContact(contact)),
  showNotifyWithMessage: text => dispatch(actions.showNotify(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
