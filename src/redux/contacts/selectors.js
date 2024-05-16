import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredContacts = createSelector(
  (state) => state.contacts,
  (state) => state.filters,
  (contacts, filters) => {
    return contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(filters.name.toLowerCase())
    );
  }
);