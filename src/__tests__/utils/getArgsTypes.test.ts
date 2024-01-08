import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {
  GraphQLScalarTypeExtensions,
  ScalarTypeDefinitionNode,
  ScalarTypeExtensionNode,
} from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { JSXElementConstructor, ReactElement } from 'react';
import getArgsTypes from '../../utils/getArgsTypes';

const MockData = {
  description:
    'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
  name: 'Int',
  parseLiteral: jest.fn(),
  parseValue: jest.fn(),
  serialize: jest.fn(),
  specifiedByURL: '',
  extensions: {} as Readonly<GraphQLScalarTypeExtensions>,
  astNode: {} as Maybe<ScalarTypeDefinitionNode>,
  extensionASTNodes: {} as Readonly<ScalarTypeExtensionNode[]>,
  toConfig: jest.fn(),
  toJSON: jest.fn(),
  [Symbol.toStringTag]: '',
};

describe('getArgsTypes fn', () => {
  it('should be in the document', () => {
    const handleClick = jest.fn();
    const result = getArgsTypes(MockData, handleClick);

    render(
      result as ReactElement<string, string | JSXElementConstructor<string>>
    );

    const renderedResult = screen.getByText('Int');

    expect(renderedResult).toBeInTheDocument();
  });
});
