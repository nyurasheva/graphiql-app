/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import requestSlice, {
  fetchQuery,
  setApi,
  setQuery,
  setResponse,
  setVariables,
} from '../../store/slice/requestSlice';
import store from '../../store/store';

global.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        data: 'test',
      }),
  });
});

describe('requestSlice', () => {
  it('should has api initial state', () => {
    const { api } = store.getState().request;
    expect(api).toEqual('https://rickandmortyapi.com/graphql');
  });

  it('should has request initial state', () => {
    const { headers } = store.getState().request;
    expect(headers).toEqual({ 'Content-Type': 'application/json' });
  });

  it('should be able to dispatch new api', () => {
    const result = store.dispatch(setApi('https://google.com'));

    expect(result.type).toBe('request/setApi');

    const { api } = store.getState().request;
    expect(api).toEqual('https://google.com');
  });

  it('should be able to dispatch new query', () => {
    const result = store.dispatch(setQuery('mutation'));

    expect(result.type).toBe('request/setQuery');

    const { query } = store.getState().request;
    expect(query).toEqual('mutation');
  });

  it('should be able to dispatch new variables', () => {
    const result = store.dispatch(setVariables('auth'));

    expect(result.type).toBe('request/setVariables');

    const { variables } = store.getState().request;
    expect(variables).toEqual('auth');
  });

  it('should be able to dispatch new response', () => {
    const result = store.dispatch(setResponse('hello'));

    expect(result.type).toBe('request/setResponse');

    const { response } = store.getState().request;
    expect(response).toEqual('hello');
  });

  it('sets fetching true when fetchQuery is pending', () => {
    const initialState = {
      api: 'https://rickandmortyapi.com/graphql',
      query: '',
      response: '',
      variables: '',
      headers: { 'Content-Type': 'application/json' },
      info: '',
    };

    const action = { type: fetchQuery.pending.type };
    const state = requestSlice(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('sets fetching true when fetchQuery is fulfilled', () => {
    const initialState = {
      api: 'https://rickandmortyapi.com/graphql',
      query: 'query',
      response: 'response',
      variables: 'variables',
      headers: { 'Content-Type': 'application/json' },
      info: '',
    };

    const action = { type: fetchQuery.fulfilled.type };
    const state = requestSlice(initialState, action);
    expect(state).toEqual({
      api: 'https://rickandmortyapi.com/graphql',
      query: 'query',
      info: '',
      response: undefined,
      variables: 'variables',
      headers: { 'Content-Type': 'application/json' },
    });
  });
  it('sets fetching true when fetchQuery is fulfilled', () => {
    const initialState = {
      api: 'https://rickandmortyapi.com/graphql',
      query: 'query',
      response: 'response',
      variables: 'variables',
      headers: { 'Content-Type': 'application/json' },
      info: '',
    };

    const action = {
      type: fetchQuery.rejected.type,
      error: { message: 'error' },
    };

    const state = requestSlice(initialState, action);

    expect(state).toEqual({
      api: 'https://rickandmortyapi.com/graphql',
      query: 'query',
      info: '',
      response: ' ',
      variables: 'variables',
      headers: { 'Content-Type': 'application/json' },
    });
  });

  it('should asyncThunk call fetch', async () => {
    await store.dispatch(
      fetchQuery({
        api: 'testApi',
        query: 'query',
        requestHeaders: {} as Headers,
        variables: '',
      })
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
