import { render } from '@testing-library/react';
import { GraphQLField, GraphQLOutputType, GraphQLType } from 'graphql';
import { NextField } from '../components/Docs/components';

interface INextField {
  fieldName: string;
  handleClick: (
    value:
      | GraphQLOutputType
      | GraphQLField<unknown, unknown, unknown>
      | GraphQLType
  ) => void;
  fieldType: GraphQLOutputType | GraphQLField<unknown, unknown, unknown>;
}

const variable: {
  fieldName: string;
  handleClick: (
    value:
      | GraphQLOutputType
      | GraphQLField<unknown, unknown, unknown>
      | GraphQLType
  ) => void;
  fieldType: GraphQLOutputType | GraphQLField<unknown, unknown, unknown>;
} = {
  fieldName: 'exampleField',
  handleClick: jest.fn(),
  fieldType: {} as GraphQLOutputType | GraphQLField<unknown, unknown, unknown>,
};

it('renders arguments with correct formatting', () => {
  const { getByText, queryByText } = render(
    <NextField {...(variable as INextField)} />
  );

  const arg2Element = getByText('exampleField');
  expect(arg2Element).toBeInTheDocument();

  const nonExistentFieldElement = queryByText('nonExistentField');
  expect(nonExistentFieldElement).toBeNull();
});
