import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import * as actions from '../../redux/actions';
import ContactList from './ContactList';

const mapStateToProps = store => ({
  filteredContacts: selectors.getFilteredContacts(store),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
