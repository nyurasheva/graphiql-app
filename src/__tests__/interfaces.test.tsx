import {
  DataForm,
  EditorSectionProps,
  IQueries,
  IRootSchema,
} from '../types/interface';

describe('GraphQL Types', () => {
  test('IRootSchema has correct properties', () => {
    const rootSchema: IRootSchema = {
      fields: {},
    };

    expect(rootSchema).toHaveProperty('fields', {});
  });

  test('IQueries has correct properties', () => {
    const queries: IQueries = {
      name: 'QueryType',
      description: 'A description',
      fields: {},
    };

    expect(queries).toHaveProperty('name');
    expect(queries).toHaveProperty('description');
    expect(queries).toHaveProperty('fields');
  });

  test('EditorSectionProps has correct properties', () => {
    const editorSectionProps: EditorSectionProps = {
      title: 'Test Title',
    };

    expect(editorSectionProps).toHaveProperty('title');
  });

  test('DataForm extends DataLogin', () => {
    const dataForm: DataForm = {
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    };

    expect(dataForm).toHaveProperty('email');
    expect(dataForm).toHaveProperty('password');
    expect(dataForm).toHaveProperty('confirmPassword');
  });
});
