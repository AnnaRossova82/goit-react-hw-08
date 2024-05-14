import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "../redux/contactsSlice";
import filtersSlice from "../redux/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
  },
});

export default store;

