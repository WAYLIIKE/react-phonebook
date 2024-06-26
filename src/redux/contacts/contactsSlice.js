import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  patchContact,
} from './contactsOps';
import toast from 'react-hot-toast';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        toast.success('Successfully added!');
      })
      .addCase(addContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
        toast.success('Successfully deleted!');
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(patchContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(patchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map(item => {
          if (item.id === action.payload.id) return action.payload;
          return item;
        });
        toast.success('Successfully updated!');
      }),
});

export const contactsReducer = contactsSlice.reducer;
