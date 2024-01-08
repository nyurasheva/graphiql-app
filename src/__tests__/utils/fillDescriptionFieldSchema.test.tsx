import '@testing-library/jest-dom';
import { GraphQLInputObjectType, GraphQLInt, GraphQLScalarType } from 'graphql';
import fillDescriptionFieldSchema from '../../utils/fillDescriptionFieldSchema';

const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: '',
});

const userInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    name: { type: DateScalar },
    age: { type: GraphQLInt },
  }),
  description: '',
});

const inputFieldsMap = userInputType.getFields();

describe('fillDescriptionFieldSchema fn', () => {
  it('should ', () => {
    const result = fillDescriptionFieldSchema(inputFieldsMap);

    expect(result.name.description).toBe('GraphQL name type');
  });
});
