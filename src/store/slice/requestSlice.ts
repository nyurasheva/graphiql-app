import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkVariables } from '../../utils/checkVariables';
import { toast } from 'react-toastify';
import {
  TOAST_REQUEST_PENDING,
  TOAST_REQUEST_PENDING_RU,
  TOAST_REQUEST_SUCCESS,
  TOAST_REQUEST_SUCCESS_RU,
} from '../../constants/toastsConst';
import { onRenderError } from '../../utils/renderError';
import { initialQuery } from '../../constants/editor';
import { DataType } from '../../types/interface';

const initialState: DataType = {
  api: 'https://rickandmortyapi.com/graphql',
  query: initialQuery,
  response: '',
  variables: '',
  headers: { 'Content-Type': 'application/json' },
  info: '',
};

export const fetchQuery = createAsyncThunk(
  'request/fetchQuery',
  async ({
    api,
    variables,
    requestHeaders,
    query,
  }: {
    api: string;
    variables: string;
    requestHeaders: Headers;
    query: string;
  }) => {
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: requestHeaders as Headers,
        body: JSON.stringify({ query, variables: checkVariables(variables) }),
      });
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      {
        throw new Error(`Error fetching data: ${error}`);
      }
    }
  }
);

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setApi: (state, action) => {
      state.api = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setVariables: (state, action) => {
      state.variables = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setHeaders: (state, action) => {
      if ((action.payload = ' ')) {
        state.headers = { 'Content-Type': 'application/json' };
      } else {
        const num = action.payload.lastIndexOf(':');
        const key = action.payload.slice(0, num);
        const value = action.payload.slice(num + 1).trim();
        state.headers = { 'Content-Type': 'application/json', [key]: value };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuery.pending, (state) => {
      toast.loading(
        state.info === 'ru' ? TOAST_REQUEST_PENDING_RU : TOAST_REQUEST_PENDING
      );
    });
    builder.addCase(fetchQuery.rejected, (state, action) => {
      const errorMessage = action.error.message || 'Unknown error';
      const lang = state.info;
      toast.dismiss();
      toast.error(onRenderError(errorMessage, lang));
      state.response = ' ';
    });
    builder.addCase(fetchQuery.fulfilled, (state, action) => {
      toast.dismiss();
      toast.success(
        state.info === 'ru' ? TOAST_REQUEST_SUCCESS_RU : TOAST_REQUEST_SUCCESS
      );
      state.response = JSON.stringify(action.payload, null, 2);
    });
  },
});

export const {
  setApi,
  setQuery,
  setVariables,
  setResponse,
  setHeaders,
  setInfo,
} = requestSlice.actions;

export default requestSlice.reducer;
