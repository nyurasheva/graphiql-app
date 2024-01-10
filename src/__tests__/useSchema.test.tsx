import { renderHook } from '@testing-library/react';
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import useSchema from '../hooks/useSchema';
import { act } from 'react-dom/test-utils';

describe('useSchema Hook', () => {
  it('updates rootSchema when schema is set', () => {
    const { result } = renderHook(() => useSchema());

    const mockQueryType = new GraphQLObjectType({
      name: 'Query',
      fields: {
        exampleField: {
          type: GraphQLString,
          description: 'Example field description',
        },
      },
    });

    const mockSchema = new GraphQLSchema({
      query: mockQueryType,
    });

    act(() => {
      result.current.setSchema(mockSchema);
    });

    expect(result.current.rootSchema).toBeDefined();
  });
});
