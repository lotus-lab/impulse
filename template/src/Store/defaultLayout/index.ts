import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDefaultLayout } from '../types';
import i18next from 'i18next';

const slice = createSlice({
  name: 'theme',
  initialState: { theme: 'default', language: 'eng' } as IDefaultLayout,
  reducers: {
    changeLanguage(state, action: PayloadAction<string>) {
      i18next.changeLanguage(action.payload);
    },
    changeThemeMode(
      state,
      action: PayloadAction<'dark' | 'light' | 'default'>,
    ) {
      state.theme = action.payload;
    },
  },
});

export const { changeLanguage } = slice.actions;

export default slice.reducer;
