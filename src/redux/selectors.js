import { createSelector } from 'reselect';

export const getContacts = store => store.phoneBook.contacts;

export const getSearhValue = store => store.phoneBook.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getSearhValue],
  (contacts, searchValue) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase()),
    ),
);

export const getNotifyMessage = store => store.phoneBook.notifyText;
